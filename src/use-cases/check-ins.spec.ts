import { expect, describe, it, beforeEach } from 'vitest'

import { CheckInUseCase } from './check-ins'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'

let prismaCheckInsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase

describe('Check Ins Use Case', () => {
  beforeEach(() => {
    prismaCheckInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInUseCase(prismaCheckInsRepository)
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      userId: 'user-01',
      gymId: 'gym-02',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
