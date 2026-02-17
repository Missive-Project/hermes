import { NextFunction, Request, Response } from 'express'
import { version } from '../../package.json'
import { ValidationException } from '../exceptions/validation.exception'

export const healthCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    status: 'ok',
    version,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
}
