import { Module } from "@nestjs/common";
import { Product } from "src/domain/entities/product/product.entity";
import { ProductUtils } from "src/utils/product/utils.product";

@Module({
    providers: [Product/*, User*/, ProductUtils]
})
export class ServiceModule {
}