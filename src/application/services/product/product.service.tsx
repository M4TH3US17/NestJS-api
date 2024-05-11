import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/domain/entities/product/product.entity";
import { ProductRequest } from "src/infrastructure/request/product/product.request";
import { ProductResponse } from "src/infrastructure/response/product/product.response";
import { ProductUtils } from "src/utils/product/utils.product";
import { Repository } from "typeorm";
import { FindOneOptions } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly repository: Repository<Product>) {}

    public async findAll(): Promise<ProductResponse> {
        try {
            this.log(`ProductService :: Iniciando consulta na base de dados...`);
            const data = await this.repository.find();
            this.log(`ProductService :: Enviando dados para o front...`);
            return new ProductResponse(200, 'Segue a lista de produtos!', ProductUtils.parseListToDTO(data));
        } catch(error) {
            this.error(`ProductService :: Erro ao buscar produtos: ${error}`);
            return new ProductResponse(500, 'Houve um erro ao buscar produtos!', []);
        }
    };

    public async findById(productId: number): Promise<ProductResponse> {
        try {
            this.log(`ProductService :: Iniciando a busca do produto de ID ${productId} na base de dados...`);
            const options: FindOneOptions = { where: { productId } };
            const data = await this.repository.findOne(options);

            if (!data) {
                this.warn(`Produto de ID ${productId} não encontrado!`);
                return new ProductResponse(404, `Produto de ID ${productId} não encontrado!`, []);
            };
        
            this.log(`ProductService :: Enviando dados para o front...`);
            return new ProductResponse(200, `Produto de ID ${productId} localizado com sucesso!`, ProductUtils.parseToDTO(data));
        } catch(error) {
            this.error(`ProductService :: Erro ao buscar produto por ID ${productId}: ${error}`);
            return new ProductResponse(500, `Houve um erro ao buscar produto por ID ${productId}!`, []);
        }
    };

    public async save(request: ProductRequest): Promise<ProductResponse> {
        try {
            this.log(`ProductService :: Salvando na base de dados...`);
            const product = ProductUtils.parseRequestToEntity(request);

            if(product === null) {
                this.error('ProductService :: Operacao encerrada devido a erros do usuario!');
                return new ProductResponse(400, 'Dados invalidos. Preencha os campos corretamente!', null);
            }

            const savedProduct = await this.repository.save(product);
            return new ProductResponse(201, 'Produto cadastrado com sucesso!', ProductUtils.parseToDTO(savedProduct));
            
        } catch(error) {
            this.error(`ProductService :: Erro ao salvar o produto: ${error}`);
            return new ProductResponse(500, 'Houve erro ao salvar o produto!', []);
        }
    };

    // Métodos auxiliares (LOG)
    log   = (str: string) => new Logger(ProductService.name).log(str);
    warn  = (str: string) => new Logger(ProductService.name).warn(str);
    error = (str: string) => new Logger(ProductService.name).error(str);
}