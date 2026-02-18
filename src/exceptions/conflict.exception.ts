import { HttpException } from '../exceptions/exception'

export class ConflictException extends HttpException {
  constructor(message = 'Conflict') {
    super(409, message)
  }
}
