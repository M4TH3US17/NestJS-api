import { Controller, Get, Logger, Param } from "@nestjs/common";
import { ProductService } from "../services/product/product.service";
import { ProductResponse } from "src/infrastructure/response/product/product.response";

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

    log = (str: string) => new Logger(ProductController.name).log(str);
};