const Joi = require("joi");
const {
  email,
  phone,
  objectId,
  status,
} = require("../../validations/commonValidation");

const createCompanyValidation = Joi.object({
  companyName: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required(),

  email: email.required(),

  phone: phone.required(),

  industry: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required(),

  address: Joi.object({
    country: Joi.string().trim().required(),

    city: Joi.string().trim().required(),

    street: Joi.string().trim().required(),
  }).required(),

  status: status.optional(),
});

const updateCompanyValidation = Joi.object({
  companyName: Joi.string()
    .trim()
    .min(3)
    .max(100),

  email: email,

  phone: phone,

  industry: Joi.string()
    .trim()
    .min(2)
    .max(100),

  address: Joi.object({
    country: Joi.string().trim(),

    city: Joi.string().trim(),

    street: Joi.string().trim(),
  }),

  status,

  createdBy: objectId,
}).min(1);

module.exports = {
  createCompanyValidation,
  updateCompanyValidation,
};