import { Injectable } from "@nestjs/common";
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class ProductResponse {
     @ApiProperty({ description: "Código HttpStatus", example: "200, 201, 400...", required: true })
     code: number;

     @ApiProperty({ description: 'Mensagem de retorno do sistema',  example: "Produto cadastrado com sucesso.", required: true })
     message: string;

     @ApiProperty({ description: "Objeto de retorno para o front-end", example: "Pode ser diversas entidades, conforme o fluxo atual." })
     data: any;

     constructor(code: number, message: string, data: any) {
        this.code    = code;
        this.message = message;
        this.data    = data;
     };
};