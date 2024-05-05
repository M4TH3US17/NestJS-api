import { Injectable, Logger } from "@nestjs/common";
import { Product } from "src/domain/entities/product/product.entity";
import { ProductResponse } from "src/infrastructure/response/product/product.response";
import { ProductUtils } from "src/utils/product/utils.product";

@Injectable()
export class ProductService {
    constructor() {}

    getAllProducts(): ProductResponse {
        this.log(`ProductService :: Iniciando consulta na base de dados...`);
        let data = [];
        let listOfDTO = ProductUtils.parseListToDTO(data);

        this.log(`ProductService :: Enviando dados para o front...`);
        return new ProductResponse(200, 'segue a lista de produtos!', listOfDTO);
    };

    getProductByID(id: number): ProductResponse {
        this.log(`ProductService :: Iniciando a busca do produto de ID ${id} na base de dados...`);
        let data = new Product();
        let dto = ProductUtils.parseToDTO(data);

        this.log(`ProductService :: Enviando dados para o front...`);
        return new ProductResponse(200, `Produto de ID ${id} localizado com sucesso!`, dto);
    };

    log = (str: string) => new Logger(ProductService.name).log(str);

};