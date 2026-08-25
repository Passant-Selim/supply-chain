const Joi = require("joi");
const { email } = require("../../validations/commonValidation");

const loginValidation = Joi.object({
    email: email.required(),
    password: Joi.string().required(),
});

module.exports = {
    loginValidation,
};