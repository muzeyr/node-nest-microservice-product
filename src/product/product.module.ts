import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[TypeOrmModule.forFeature([Product]),HttpModule],
  exports:[TypeOrmModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
