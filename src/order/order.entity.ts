import { Users } from "src/auth/user.entity";
import { ProductEntity } from "src/product/product.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    subTotal: number;

    @Column({default: false})
    pedding: boolean;

    @OneToMany(type => ProductEntity, item => item.id)
    @JoinColumn()
    items: ProductEntity[];

    @OneToOne(type => Users, user => user.username)
    @JoinColumn()
    user : Users;
}
