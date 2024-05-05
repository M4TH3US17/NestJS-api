import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductDTO {

    id: number;
    name: string;
    description: string;
    price: number;
    validUntil: Date;

    constructor() {}

    setId(id: number): ProductDTO {
        this.id = id;
        return this;
    }

    setName(name: string): ProductDTO {
        this.name = name;
        return this;
    }

    setPrice(price: number): ProductDTO {
        this.price = price;
        return this;
    }

    setDescription(description: string): ProductDTO {
        this.description = description;
        return this;
    }

    setValidUntil(validUntil: Date): ProductDTO {
        this.validUntil = validUntil;
        return this;
    }
};