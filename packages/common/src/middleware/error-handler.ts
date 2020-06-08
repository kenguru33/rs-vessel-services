import { Request, Response, NextFunction } from 'express';
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    res.status(400).send(err.message);
  }
  next();
};
