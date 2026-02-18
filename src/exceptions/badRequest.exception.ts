import { HttpException } from '../exceptions/exception'

export class BadRequestException extends HttpException {
  constructor(message = 'Bad Request', errors?: any) {
    super(400, message, errors)
  }
}
