import { Request, Response, NextFunction } from 'express'
import { HttpException } from '../exceptions/exception'

export const errorHandler = (
  err: Error | HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof HttpException) {
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
      ...(err.errors && { errors: err.errors })
    })
  }

  console.error('💥 Unexpected error:', err)

  return res.status(500).json({
    status: 'error',
    statusCode: 500,
    message: 'Internal Server Error'
  })
}
