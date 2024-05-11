import { Body, Controller, Get, Logger, Param, Post } from "@nestjs/common";
import { ProductService } from "../services/product/product.service";
import { ProductResponse } from "src/infrastructure/response/product/product.response";
import { ProductRequest } from "src/infrastructure/request/product/product.request";
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('products') 
@Controller('api/v1/products')
export class ProductController {
    constructor(private readonly service: ProductService) {}

    @Get()
    @ApiOperation({ summary: 'Retorna todos os produtos' })
    @ApiResponse({ status: 200, type: ProductResponse })
    public async getAllProducts(): Promise<ProductResponse> {
        this.log('ProductController :: Iniciando busca de todos os produtos cadastrados no sistema...');
        let response = await this.service.findAll();
        return response;
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retorna um produto por ID.' })
    @ApiResponse({ status: 404, description: 'Produto nao encontrado' })
    @ApiResponse({ status: 200, description: 'Produto localizado com sucesso', type: ProductResponse })
    public async getProductByID(@Param('id') productId: number): Promise<ProductResponse> {
        this.log(`ProductController :: Iniciando busca produto de ID ${productId}...`);
        let response = await this.service.findById(productId);
        return response;
    }

    @Post()
    @ApiOperation({ summary: 'Cadastra um produto no sistema.' })
    @ApiBody({type: ProductRequest, description: 'Objeto para cadastrar um produto. Exemplo: { name: "Produto 1", price: 100.0, description: "Descrição do produto 1", validUntil: "2024-05-11" }'})
    @ApiResponse({ status: 201, description: 'Produto cadastrado com sucesso', type: ProductResponse })
    public async saveProduct(@Body() request: ProductRequest): Promise<ProductResponse> {
        this.log(`ProductController :: Iniciando processo de persistencia de um novo produto...`);
        let response = await this.service.save(request);
        return response;
    }

    log = (str: string) => new Logger(ProductController.name).log(str);
};