import { Injectable, Logger } from "@nestjs/common";
import { ProductDTO } from "src/application/dto/product/product.dto";
import { Product } from "src/domain/entities/product/product.entity";
import { ProductRequest } from "src/infrastructure/request/product/product.request";

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

    static parseRequestToEntity(data: ProductRequest): Product {
        this.log('ProductUtils :: convertendo request para entidade...');
    
        if (!data.name || !data.price || !data.description || !data.validUntil) {
            this.warn('ProductUtils :: Request esta invalido, pois algum campo obrigatorio esta vazio/nulo!');
            return null;
        };
    
        this.log('ProductUtils :: Request validado com sucesso! Retornando entidade...');
        return new Product(
            null,
            data.name,
            data.price,
            data.description,
            null,
            new Date(data.validUntil)
        );
    };


    static log = (str: string) => new Logger(ProductUtils.name).log(str);
    //static error = (str: string) => new Logger(ProductUtils.name).error(str);
    static warn = (str: string) => new Logger(ProductUtils.name).warn(str);
};