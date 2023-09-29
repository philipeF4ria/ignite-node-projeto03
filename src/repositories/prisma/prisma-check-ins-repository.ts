import { Prisma } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { CheckInsRepository } from '../check-ins-repository'

class PrismaCheckInsRepository implements CheckInsRepository {
  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = await prisma.checkIn.create({
      data: {
        user_id: data.user_id,
        gym_id: data.gym_id,
      },
    })

    return checkIn
  }
}

export { PrismaCheckInsRepository }
