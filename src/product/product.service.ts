import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product) private readonly categoryRepo: Repository<Product>) {
        
    }

    async find(options: FindManyOptions): Promise<Product[]>{
        return this.categoryRepo.find(options);
    }
    
    async create(data):Promise<Product>{

        return this.categoryRepo.save(data);
    }    
}
