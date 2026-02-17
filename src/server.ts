import express, { Application } from 'express'
import cors from 'cors'
import { config } from './config'
import { initializeDatabase } from './config/datasource.config'
import { errorHandler } from './middlewares/error.middleware'
import healthRoutes from './routes/health.routes'
import { notFoundHandler } from './middlewares/notFound.middleware'

const app: Application = express()

app.use(cors({ origin: config.corsOrigin }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', healthRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

const startServer = async () => {
  try {
    await initializeDatabase()

    app.listen(config.port, () => {
      console.info(
        `🚀 Server running on port http://localhost:${config.port}/api/health`
      )
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

export default app
