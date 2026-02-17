import { HttpException } from '../exceptions/exception'

export class DBConnexionException extends HttpException {
  constructor(message = 'Database Connection Error', errors?: any) {
    super(500, message, errors)
  }
}
