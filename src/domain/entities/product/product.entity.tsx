import { Injectable } from "@nestjs/common";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
@Injectable()
export class Product {
    @PrimaryGeneratedColumn({ type: 'int', name: 'product_id' })
    productId: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    price: number;

    @Column({ nullable: false })
    description: string;

    @CreateDateColumn({ name: 'creation_date', nullable: false })
    creationDate: Date;

    @Column({ name: 'valid_until', nullable: false })
    validUntil: Date;

    constructor(
        productId: number,
        name: string,
        price: number,
        description: string,
        creationDate: Date,
        validUntil: Date
    ) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.description = description;
        this.creationDate = creationDate;
        this.validUntil = validUntil;
    }
    
}