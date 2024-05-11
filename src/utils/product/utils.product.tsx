import { Injectable, Logger } from "@nestjs/common";
import { ProductDTO } from "src/application/dto/product/product.dto";
import { Product } from "src/domain/entities/product/product.entity";
import { ProductRequest } from "src/infrastructure/request/product/product.request";
import { Utils } from "../utils";

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
    
        if (Utils.isBlank(data.name) || this.isInvalidPrice(data.price) || Utils.isBlank(data.description) || Utils.isInvalidDate(data.validUntil)) {
            this.warn('ProductUtils :: Request esta invalido, revise os dados fornecidos!');
            return null;
        };
    
        this.log('ProductUtils :: Request validado com sucesso! Retornando entidade...');
        return new Product(
            null,
            data.name,
            data.price,
            data.description,
            new Date(),
            new Date(data.validUntil)
        );
    };

    private static isInvalidPrice = (price: number): boolean => (price === 0 || price === null || price === undefined);

    private static log = (str: string) => new Logger(ProductUtils.name).log(str);
    //static error = (str: string) => new Logger(ProductUtils.name).error(str);
    private static warn = (str: string) => new Logger(ProductUtils.name).warn(str);
};