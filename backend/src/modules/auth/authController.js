const bcrypt = require("bcrypt");
const User = require("../user/userModel");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");
const { generateToken } = require("../../utils/jwt");


const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return next(new AppError("Incorrect email or password", 401));
    }

    if (user.status !== "active") {
        return next(new AppError("This account is inactive", 401));
    }

    const token = generateToken({ id: user._id });

    const cookieExpiresInDays = Number(process.env.JWT_COOKIE_EXPIRES_IN) || 1;

    res.cookie("token", token, {
        expires: new Date(Date.now() + cookieExpiresInDays * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    user.password = undefined;

    res.status(200).json({
        success: true,
        token,
        data: { user },
    });
});

module.exports = {
    login,
};