import Joi from "joi";

export const bookSchema = Joi.object({
  title : Joi.string().min(3),
  author : Joi.string().min(3),
  publicationDate : Joi.date(),
  isbn : Joi.string().min(1),
  genre : Joi.string().min(1),
});
