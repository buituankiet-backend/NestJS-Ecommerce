import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
import { ProductsService } from 'src/product/product.service';
import { CartEntity } from './cart.entity';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  providers: [CartService, ProductsService],
  controllers: [CartController],
})
export class CartModule {}
