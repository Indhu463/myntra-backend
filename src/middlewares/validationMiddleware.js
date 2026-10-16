import Joi from "joi";

const schema = Joi.object({
  categoryId: Joi.number().positive().integer(),
  brandId: Joi.number().positive().integer(),
  page: Joi.number().positive().integer().default(1),
  limit: Joi.number().positive().integer(),
  search: Joi.string().trim().allow(""),
}).unknown(true);

export const validateProdQuery = (req, res, next) => {
  const { error, value } = schema.validate(req.query, {
    convert: true,
    stripUnknown: false,
  });
  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details[0].message,
    });
  }
  res.locals.query = value;
  next();
};
