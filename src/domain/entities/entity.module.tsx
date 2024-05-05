import { Module } from "@nestjs/common";
import { Product } from "./product/product.entity";

@Module({
    exports: [Product/*, User*/]
})
export class EntityModule {
}