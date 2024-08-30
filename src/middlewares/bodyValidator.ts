import {Request, Response, NextFunction} from 'express'
import { httpResponse } from '../utils/httpResponses';
import Joi from 'joi';

export const bodyValidator = (schema : Joi.Schema) => (req : Request, res : Response, next : NextFunction) => {
  const { error } = schema.validate(req.body);
  if(error) return httpResponse(400, error, false, res,);
  next();
}
