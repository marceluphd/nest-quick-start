import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category])
  ],
  controllers: [CategoryController]
})
export class CategoryModule {}
