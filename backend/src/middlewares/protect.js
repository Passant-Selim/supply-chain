const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { verifyToken } = require("../utils/jwt");
const User = require("../modules/user/userModel");


const protect = catchAsync(async (req, res, next) => {
    let token;

    if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    } else if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(
            new AppError("You are not logged in, please log in to get access", 401),
        );
    }

    const decoded = verifyToken(token);

    const currentUser = await User.findById(decoded.id).populate({
        path: "role",
        populate: { path: "permissions" },
    });

    if (!currentUser) {
        return next(
            new AppError("The user belonging to this token no longer exists", 401),
        );
    }

    if (currentUser.status !== "active") {
        return next(new AppError("This account is inactive", 401));
    }

    req.user = currentUser;
    next();
});


module.exports = protect;