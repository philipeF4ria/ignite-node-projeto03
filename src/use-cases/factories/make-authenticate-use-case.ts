import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { Authenticate } from '../authenticate'

function makeAuthenticateUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new Authenticate(prismaUsersRepository)

  return authenticateUseCase
}

export { makeAuthenticateUseCase }
