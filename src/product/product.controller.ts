import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService,
        private httpService: HttpService){

    }
 

    @Get('/:id/category')
    async postProduct(@Param('id') id:number ){

        return this.productService.find({
            where:{
                category_id:id
            }
        })


    }

    @Post()
    async create(
        @Body('category_id') category_id: number,
        @Body('name') name: string,
    ){
        console.log(1);
        const product = await this.productService.create({category_id,name});
        this.httpService.post(`http://localhost:8000/api/category/${category_id}/product`,{
            id:category_id,        
            name            
        }).subscribe(()=>{
            console.log('request send');
        });
        return  product;
        
    }
     


}
