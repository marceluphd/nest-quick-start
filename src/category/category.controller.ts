import { Controller, Get, Post, Put, Delete, Param, Req } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>
    )
    {

    }
 
    @Get()
    async index(){
       // return {name: 'Marcelo Anjos'}
       // return [{name: 'Marcelo Anjos'}]
       return  this.categoryRepo.find();
    }

    @Get(':id')
    async show(@Param() params){
       // return {name: 'Marcelo Anjos'}
       // return [{name: 'Marcelo Anjos'}]
       return  this.categoryRepo.findOne(params.id);
    }

    @Post()
    async store(@Req() request: Request){
       // return {name: 'Marcelo Anjos'}
       // return [{name: 'Marcelo Anjos'}]
       const category = this.categoryRepo.create(request.body as any)
       return  this.categoryRepo.save(category);
    }

    @Put(':id')
    async update(@Req() request: Request, @Param() params){
       // return {name: 'Marcelo Anjos'}
       // return [{name: 'Marcelo Anjos'}]
        await this.categoryRepo.update(params.id, request.body as any)
        return  this.categoryRepo.findOne(params.id);
   
    }

    @Delete(':id')
    async destroy(@Param() params){
            return  this.categoryRepo.delete(params.id);
   
    }
}
