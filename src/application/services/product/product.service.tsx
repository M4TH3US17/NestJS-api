import { Injectable, Logger } from "@nestjs/common";
import { Product } from "src/domain/entities/product/product.entity";
import { ProductResponse } from "src/infrastructure/response/product/product.response";
import { ProductUtils } from "src/utils/product/utils.product";

@Injectable()
export class ProductService {

    repository = this.returnListOfProject();

    getAllProducts(): ProductResponse {
        this.log(`ProductService :: Iniciando consulta na base de dados...`);
        let data = this.repository;
        let listOfDTO = ProductUtils.parseListToDTO(data);

        this.log(`ProductService :: Enviando dados para o front...`);
        return new ProductResponse(200, 'segue a lista de produtos!', listOfDTO);
    };

    getProductByID(id: number): ProductResponse {
        try {
            this.log(`ProductService :: Iniciando a busca do produto de ID ${id} na base de dados...`);
            let data = this.repository.find(product => product.productId === id);
            console.log(data)
            let dto = ProductUtils.parseToDTO(data);
    
            this.log(`ProductService :: Enviando dados para o front...`);
            return new ProductResponse(200, `Produto de ID ${id} localizado com sucesso!`, dto);
        } catch(error) {
            this.warn(`ProductService :: ${error}`);
            return new ProductResponse(500, `Houve um erro do lado do servidor!`, []);
        }
    };

    // METODOS AUXILIARES
    log = (str: string) => new Logger(ProductService.name).log(str);
    warn = (str: string) => new Logger(ProductService.name).error(str);

    // DADOS MOCKADOS PRA TESTAR
    returnListOfProject(): Product[] {
        return [
            new Product()
            .setProductId(1)
            .setName('Product 1')
            .setPrice(10.99)
            .setDescription('Description for Product 1')
            .setCreationDate(new Date())
            .setValidUntil(new Date()), 
            new Product()
            .setProductId(1)
            .setName('Product 1')
            .setPrice(10.99)
            .setDescription('Description for Product 1')
            .setCreationDate(new Date())
            .setValidUntil(new Date()),
            new Product()
            .setProductId(1)
            .setName('Product 1')
            .setPrice(10.99)
            .setDescription('Description for Product 1')
            .setCreationDate(new Date())
            .setValidUntil(new Date()),
            new Product()
            .setProductId(1)
            .setName('Product 1')
            .setPrice(10.99)
            .setDescription('Description for Product 1')
            .setCreationDate(new Date())
            .setValidUntil(new Date()),
            new Product()
            .setProductId(1)
            .setName('Product 1')
            .setPrice(10.99)
            .setDescription('Description for Product 1')
            .setCreationDate(new Date())
            .setValidUntil(new Date()),
        ];
    }

};