import { Module } from "@nestjs/common";
import { EntityModule } from "src/domain/entities/entity.module";
import { UtilsModule } from "src/utils/utils.module";
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "./product/product.service";

@Module({
    imports: [EntityModule],
    controllers: [ProductController],
    providers: [ProductService],
  })
  export class ServiceModule {}