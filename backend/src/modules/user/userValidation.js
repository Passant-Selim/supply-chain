const Joi = require("joi");
const {
  email,
  password,
  phone,
  objectId,
} = require("../../validations/commonValidation");

const createUserValidation = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(2)
    .max(30)
    .required(),

  lastName: Joi.string()
    .trim()
    .min(2)
    .max(30)
    .required(),

  email: email.required(),

  password: password.required(),

  phone: phone.required(),

  company: objectId.required(),

  role: objectId.required(),
});

const updateUserValidation = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(2)
    .max(30),

  lastName: Joi.string()
    .trim()
    .min(2)
    .max(30),

  email: email,

  phone: phone,

  company: objectId,
}).min(1);

const resetPasswordValidation = Joi.object({
  password: password.required(),
});

const assignRoleValidation = Joi.object({
  role: objectId.required(),
});

module.exports = {
  createUserValidation,
  updateUserValidation,
  resetPasswordValidation,
  assignRoleValidation,
};