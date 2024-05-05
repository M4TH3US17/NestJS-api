import { Controller, Get, Logger, Param } from "@nestjs/common";
import { ProductService } from "../services/product/product.service";
import { ProductResponse } from "src/infrastructure/response/product/product.response";

@Controller('products')
export class UserController {
    service: ProductService;

    @Get('')
    getAllProducts(): ProductResponse {
        this.log('PoductController :: Buscando todos os produtos cadastrados no sistema...');
        let response = this.service.getAllProducts();
        return response;
    }

    @Get(':id')
    getProductByID(@Param('id') productId: number): ProductResponse {
        this.log(`PoductController :: Buscando produto de ID ${productId}...`);
        let response = this.service.getProductByID(productId);
        return response;
    }

    log = (str: string) => new Logger(UserController.name).log(str);
};