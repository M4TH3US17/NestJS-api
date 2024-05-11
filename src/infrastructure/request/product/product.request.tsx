import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRequest {
    name: string;
    price: number;
    description: string;
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