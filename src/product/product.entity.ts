import { CartEntity } from "src/cart/cart.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column()
    name: string;

    @Column() 
    price: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @OneToMany(type => CartEntity, cart => cart.id)
    @JoinColumn()
    cart: CartEntity[]
}
