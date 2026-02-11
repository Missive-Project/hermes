import { Request, Response } from 'express'
import { version } from '../../package.json'

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    version,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
}
