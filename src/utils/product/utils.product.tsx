import { Injectable, Logger } from "@nestjs/common";
import { ProductDTO } from "src/application/dto/product/product.dto";
import { Product } from "src/domain/entities/product/product.entity";

@Injectable()
export class ProductUtils {
    
    static parseToDTO(data: Product): ProductDTO {
        this.log('ProductUtils :: convertendo entidade para DTO...');

        return new ProductDTO()
        .setId(data.productId)
        .setName(data.name)
        .setPrice(data.price)
        .setDescription(data.description)
        .setValidUntil(data.validUntil);
    };

    static parseListToDTO(data: Product[]): ProductDTO[] {
        this.log('ProductUtils :: convertendo lista de entidades para DTO...');
        return data.map(dataEntity => this.parseToDTO(dataEntity));
    };


    static log = (str: string) => new Logger(ProductUtils.name).log(str);
};