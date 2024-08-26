import {Response} from 'express';

export const httpResponse =  (statusCode : number, message : any, result : boolean, res : Response, data? : any) => {
  res.status(statusCode).json({
    msg : message,
    statusCode : statusCode,
    ok : result,
    data : data || null,
  })
}
