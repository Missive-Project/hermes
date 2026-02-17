import { HttpException } from '../exceptions/exception'

export class ForbiddenException extends HttpException {
  constructor(message = 'Forbidden') {
    super(403, message)
  }
}
