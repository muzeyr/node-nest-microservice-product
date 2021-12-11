import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '85.95.237.78',
      port: 3306,
      username: 'monetapo_micro',
      password: '_nv_#UX;Btab',
      database: 'monetapo_micro_p',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
