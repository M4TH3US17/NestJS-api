import { Body, Controller, Get, Logger, Param, Post } from "@nestjs/common";
import { ProductService } from "../services/product/product.service";
import { ProductResponse } from "src/infrastructure/response/product/product.response";
import { ProductRequest } from "src/infrastructure/request/product/product.request";

@Controller('api/v1/products')
export class ProductController {
    constructor(private readonly service: ProductService) {}

    @Get()
    public async getAllProducts(): Promise<ProductResponse> {
        this.log('ProductController :: Iniciando busca de todos os produtos cadastrados no sistema...');
        let response = await this.service.findAll();
        return response;
    }

    @Get(':id')
    public async getProductByID(@Param('id') productId: number): Promise<ProductResponse> {
        this.log(`ProductController :: Iniciando busca produto de ID ${productId}...`);
        let response = await this.service.findById(productId);
        return response;
    }

    @Post()
    public async saveProduct(@Body() request: ProductRequest): Promise<ProductResponse> {
        this.log(`ProductController :: Iniciando processo de persistencia de um novo produto...`);
        let response = await this.service.save(request);
        return response;
    }

    log = (str: string) => new Logger(ProductController.name).log(str);
};