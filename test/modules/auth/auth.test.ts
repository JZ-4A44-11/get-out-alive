import { TestingModule, Test } from '@nestjs/testing'
import { AppModule } from '~/app.module'
import { AuthModule } from '~/modules/auth/auth.module'

describe('Auth module', () => {
  let authModule: AuthModule

  beforeEach(async () => {
    const moduleFixed: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    authModule = moduleFixed.get<AuthModule>(AuthModule)
  })

  test('should defined', async () => {
    return expect(authModule).toBeDefined()
  })
})
