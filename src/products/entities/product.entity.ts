//import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({name: ' products' })

export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({type: "float"})
    price: number;

    @Column({type: "integer"})
    rating: number;

    @Column({ default: "primary"})
    color: string;

}
