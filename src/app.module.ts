import { Module } from '@nestjs/common';
import { ControllerModule } from './application/controllers/controllers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './domain/entities/product/product.entity';

@Module({
  imports: [
    ControllerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'nestJS-estudo',
      entities: [Product],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
