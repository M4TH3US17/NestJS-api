import { Module } from "@nestjs/common";
import { Product } from "./product/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    exports: [TypeOrmModule],
  })
  export class EntityModule {}