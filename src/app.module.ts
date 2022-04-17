import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import configuration from './infrastructure/config/configuration'
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { TransformInterceptor } from './infrastructure/interceptors/transform.interceptor'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: false, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('database') ?? {},
    }),
    UserModule,
    AuthModule,
  ],
  providers: [
    { provide: APP_PIPE, useClass: ValidationPipe },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
  controllers: [],
})
export class AppModule {}
