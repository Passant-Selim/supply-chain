const Joi = require("joi");

const objectId = Joi.string().hex().length(24);

const email = Joi.string()
  .trim()
  .lowercase()
  .email();

const password = Joi.string()
  .min(8)
  .max(30);

const phone = Joi.string()
  .trim()
  .pattern(/^01[0125][0-9]{8}$/)
  .messages("Please enter a valid phone number");

const status = Joi.string().valid("active", "inactive");

module.exports = {
  objectId,
  email,
  password,
  phone,
  status,
};