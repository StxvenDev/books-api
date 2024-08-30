import Joi from "joi";

export const bookSchemaCreate = Joi.object({
  title : Joi.string().min(3).required(),
  author : Joi.string().min(3).required(),
  publicationDate : Joi.date().required(),
  isbn : Joi.string().min(1).required(),
  genre : Joi.string().min(1).required(),
});

export const bookSchemaUpdate = Joi.object({
  title : Joi.string().min(3),
  author : Joi.string().min(3),
  publicationDate : Joi.date(),
  isbn : Joi.string().min(1),
  genre : Joi.string().min(1),
});
