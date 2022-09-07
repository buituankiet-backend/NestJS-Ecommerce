import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';

// @Module({
//   imports: [AuthModule, ProductModule, CartModule, OrderModule],
// import { ConfigModule } from '@nestjs/config'
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppDataSource } from 'src/config/ormconfig';

@Module({
  imports: [
    AuthModule, ProductModule, CartModule, OrderModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options),],
    controllers: [],
    providers: [],
})
export class AppModule {}
