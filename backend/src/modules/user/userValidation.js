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

  roles: Joi.array()
    .items(objectId)
    .min(1)
    .required(),
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

  roles: Joi.array()
    .items(objectId)
    .min(1),
}).min(1);

const loginValidation = Joi.object({
  email: email.required(),
  password: Joi.string().required(),
});

module.exports = {
  createUserValidation,
  updateUserValidation,
  loginValidation,
};