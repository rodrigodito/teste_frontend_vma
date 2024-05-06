export class UnexpectedError extends Error {
  constructor(
    readonly message: string = 'Something went wrong',
    readonly redirectTo?: string
  ) {
    super()
    this.message = message
    this.redirectTo = redirectTo
    this.name = 'UnexpectedError'
  }
}
