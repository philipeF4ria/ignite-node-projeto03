class UserAlreadyExistsError extends Error {
  constructor() {
    super('E-mail aleady exists')
  }
}

export { UserAlreadyExistsError }
