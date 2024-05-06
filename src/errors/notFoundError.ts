export class NotFoundError extends Error {
  constructor(
    readonly message: string = 'Not Found',
    readonly redirectTo?: string
  ) {
    super()
    this.message = message
    this.redirectTo = redirectTo
    this.name = 'NotFoundError'
  }
}
