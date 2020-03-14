import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyService } from './my/my.service';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'fuinhagame',
      password: 'ma1x1x0x',
      database: 'nestjs_quickstart',
      entities: [Category]
    }),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MyService,
   
    ],
})
export class AppModule {}

/*
create database nestjs_quickstart;
use database nestjs_quickstart;

CREATE TABLE IF NOT EXISTS nestjs_quickstart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO nestjs_quickstart(name) values('andrea');
*/