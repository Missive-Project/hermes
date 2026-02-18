import { HttpException } from '../exceptions/exception'

export class ValidationException extends HttpException {
  constructor(message = 'Validation failed', errors?: any) {
    super(422, message, errors)
  }
}
