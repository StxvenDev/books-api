import {Request, Response, NextFunction} from 'express'
import { bookSchema } from "../utils/joiValidator";
import { httpResponse } from '../utils/httpResponses';

export const bodyValidator = (req : Request, res : Response, next : NextFunction) => {
  const bookBody = req.body;
  const { error } = bookSchema.validate(bookBody);
  if(error) return httpResponse(400, error, false, res,);
  next();
}
