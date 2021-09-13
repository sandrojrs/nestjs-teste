import { Module } from '@nestjs/common';
import { TransactionService } from './Transactions.service';
import { TransactionController } from './Transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './Transactions.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction]),
  ],
  providers: [TransactionService],
  controllers: [TransactionController],
})
export class TransactionModule { }
