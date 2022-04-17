import { Test, TestingModule } from '@nestjs/testing'
import { UserModule } from '~/modules/user/user.module'

describe('User Module', () => {
  let userModule: UserModule

  beforeEach(async () => {
    const moduleFixed: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile()

    userModule = moduleFixed.get<UserModule>(UserModule)
  })

  test('should defined', async () => {
    return expect(userModule).toBeDefined()
  })
})
