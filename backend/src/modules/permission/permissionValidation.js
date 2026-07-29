const Joi = require("joi");

const createPermissionValidation = Joi.object({
  name: Joi.string()
    .trim()
    .uppercase()
    .min(3)
    .max(50)
    .required(),

  module: Joi.string()
    .trim()
    .min(2)
    .max(30)
    .required(),
});

const updatePermissionValidation = Joi.object({
  name: Joi.string()
    .trim()
    .uppercase()
    .min(3)
    .max(50),

  module: Joi.string()
    .trim()
    .min(2)
    .max(30),
}).min(1);

module.exports = {
  createPermissionValidation,
  updatePermissionValidation,
};