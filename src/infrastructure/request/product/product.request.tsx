import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

@Injectable()
export class ProductRequest {
    @ApiProperty({ description: 'Nome do produto', example: 'Produto 1' })
    name: string;

    @ApiProperty({ description: 'Preço do produto', example: 100.0 })
    price: number;

    @ApiProperty({ description: 'Descrição do produto', example: 'Descrição do produto 1' })
    description: string;

    @ApiProperty({ description: 'Data de validade do produto', example: '2024-05-11T00:00:00.000Z' })
    validUntil: Date;

    constructor(
        name: string,
        price: number,
        description: string,
        validUntil: Date
    ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.validUntil = validUntil;
    }
}