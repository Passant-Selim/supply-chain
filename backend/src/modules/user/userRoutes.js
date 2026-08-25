const express = require("express");
const {
    createUser,
    getUsers,
    getUser,
    updateUser,
    activateUser,
    deactivateUser,
    resetUserPassword,
    assignRole,
} = require("./userController");
const {
    createUserValidation,
    updateUserValidation,
    resetPasswordValidation,
    assignRoleValidation,
} = require("./userValidation");
const validationMiddleware = require("../../validations/validationMiddleware");
const protect = require("../../middlewares/protect");
const authorize = require("../../middlewares/authorize");

const router = express.Router();

router.use(protect);

router
.route("/")
.post(authorize("CREATE_USER"), validationMiddleware(createUserValidation), createUser)
.get(authorize("VIEW_USER"), getUsers);

router
.route("/:id")
.get(authorize("VIEW_USER"), getUser)
.patch(authorize("UPDATE_USER"), validationMiddleware(updateUserValidation), updateUser);

router.patch("/:id/activate", authorize("ACTIVATE_USER"), activateUser);
router.patch("/:id/deactivate", authorize("DEACTIVATE_USER"), deactivateUser);
router.patch("/:id/reset-password", authorize("RESET_USER_PASSWORD"), validationMiddleware(resetPasswordValidation), resetUserPassword);
router.patch("/:id/assign-role", authorize("ASSIGN_USER_ROLE"), validationMiddleware(assignRoleValidation), assignRole);

module.exports = router;