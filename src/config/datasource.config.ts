import { DataSource } from 'typeorm'
import { config } from './index'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: config.missiveDB.uri,
  entities: ['src/entities/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
  ssl: {
    rejectUnauthorized: false
  }
})

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize()
    console.log('✅ Database connection established')
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    throw error
  }
}
