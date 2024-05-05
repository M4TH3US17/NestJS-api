import { Injectable } from "@nestjs/common";

@Injectable()
export class Product {

    productId: number;
    name: string;
    price: number;
    description: string;
    creationDate: Date;
    validUntil: Date;

    constructor() {}

    setProductId(productId: number): Product {
        this.productId = productId;
        return this;
    }

    setName(name: string): Product {
        this.name = name;
        return this;
    }

    setPrice(price: number): Product {
        this.price = price;
        return this;
    }

    setDescription(description: string): Product {
        this.description = description;
        return this;
    }

    setCreationDate(creationDate: Date): Product {
        this.creationDate = creationDate;
        return this;
    }

    setValidUntil(validUntil: Date): Product {
        this.validUntil = validUntil;
        return this;
    }

    build(): Product {
        return new Product();
    }
};