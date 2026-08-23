const AppError = require("../utils/appError");

const authorize = (...requiredPermissions) => {
    return (req, res, next) => {
        const userPermissions = req.user?.role?.permissions?.map((p) => p.name) || [];

        const hasPermission = requiredPermissions.every((permission) => 
            userPermissions.includes(permission),
        );
        
        if (!hasPermission) {
            return next(new AppError("You do not have permission to perform this action", 403));
        }
        next();
    };
};

module.exports = authorize;