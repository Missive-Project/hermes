import { Request, Response, NextFunction } from 'express'
import { HttpException } from '../exceptions/exception'

export const notFoundHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  next(new HttpException(404, `Route not found: ${req.originalUrl}`))
}
