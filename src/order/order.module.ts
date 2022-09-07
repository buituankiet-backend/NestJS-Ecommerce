import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/auth/user.entity';
import { CartEntity } from 'src/cart/cart.entity';
import { CartService } from 'src/cart/cart.service';
import { ProductEntity } from 'src/product/product.entity';
import { ProductsService } from 'src/product/product.service';
import { OrderEntity } from './order.entity';
import { OrderController } from './order.controller';
import OrderService from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users])],
  providers: [OrderService, CartService, ProductsService],
  controllers: [OrderController]})
export class OrderModule {}
