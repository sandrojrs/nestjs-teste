import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { CustomersModule } from './customer/customers.module';
import { EvaluationsModule } from './evaluation/evaluations.module';
import { StoreModule } from './store/store.module';
import { TransactionModule } from './transaction/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'solucx',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), CollaboratorModule, StoreModule, CustomersModule, TransactionModule, EvaluationsModule]
})
export class AppModule { }
