import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { UserController } from "./user.controller";
import { ProductService } from "../services/product/product.service";

@Module({
    controllers: [ProductController, UserController],
    providers: [ProductService, /*UserService*/]
})
export class ControllerModule {}