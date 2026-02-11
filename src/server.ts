import express, { Application } from 'express'
import cors from 'cors'
import { config } from './config'
import healthRoutes from './routes/health.routes'
import { errorHandler } from './middlewares/error.middleware'

const app: Application = express()

app.use(cors({ origin: config.corsOrigin }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', healthRoutes)

app.use(errorHandler)

app.listen(config.port, () => {
  console.log(
    `🚀 Server running on port http://localhost:${config.port}/api/health`
  )
})

export default app
