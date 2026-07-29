const Joi = require("joi");
const { objectId } = require("../../validations/commonValidation");

const createRoleValidation = Joi.object({
  name: Joi.string()
    .trim()
    .uppercase()
    .min(3)
    .max(50)
    .required(),

  permissions: Joi.array()
    .items(objectId)
    .min(1)
    .required(),
});

const updateRoleValidation = Joi.object({
  name: Joi.string()
    .trim()
    .uppercase()
    .min(3)
    .max(50),

  permissions: Joi.array()
    .items(objectId)
    .min(1),
}).min(1);

module.exports = {
  createRoleValidation,
  updateRoleValidation,
};