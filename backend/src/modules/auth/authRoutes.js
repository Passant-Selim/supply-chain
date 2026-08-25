const express = require("express");
const { login } = require("./authController");
const { loginValidation } = require("./authValidation");
const validationMiddleware = require("../../validations/validationMiddleware");

const router = express.Router();

router.post("/login", validationMiddleware(loginValidation), login);

module.exports = router;