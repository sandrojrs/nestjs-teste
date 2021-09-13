import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Customer } from './customers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule { }
