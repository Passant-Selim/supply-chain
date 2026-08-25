const AppError = require("../utils/appError");


const handleCastErrorDB = (error) => {
    const message = `Invalid ${error.path}: ${error.value}`;
    return new AppError(message, 400);
};


const handleDuplicateFieldsDB = (error) => {
    const field = Object.keys(error.keyValue)[0];
    const message = `${field} already exists, please use another value`;
    return new AppError(message, 400);
};


const handleValidationErrorDB = (error) => {
    const errors = Object.values(error.errors).map((el) => el.message);
    const message = `Invalid input data: ${errors.join(". ")}`;
    return new AppError(message, 400);
};


const handleJWTError = () =>
    new AppError("Invalid token, please log in again", 401);


const handleJWTExpiredError = () =>
    new AppError("Your session has expired, please log in again", 401);


const sendErrorDev = (error, res) => {
    res.status(error.statusCode).json({
        success: false,
        status: error.status,
        message: error.message,
        error,
        stack: error.stack,
    });
};


const sendErrorProd = (error, res) => {
    if (error.isOperational) {
        return res.status(error.statusCode).json({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
    console.error("UNEXPECTED ERROR: ", error);
    return res.status(500).json({
        success: false,
        status: "error",
        message: "Something went wrong",
    });
};


const globalErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";

    if (process.env.NODE_ENV === "development") {
        sendErrorDev(error, res);
    } else {
        let err = { ...error, message: error.message };

        if (err.name === "CastError") err = handleCastErrorDB(err);
        if (err.code === 11000) err = handleDuplicateFieldsDB(err);
        if (err.name === "ValidationError") err = handleValidationErrorDB(err);
        if (err.name === "JsonWebTokenError") err = handleJWTError();
        if (err.name === "TokenExpiredError") err = handleJWTExpiredError();

        sendErrorProd(err, res);
    }
};

module.exports = globalErrorHandler;