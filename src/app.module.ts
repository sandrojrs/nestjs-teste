import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { ContactsModule } from './contacts/contacts.module';
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
      database: 'solucx1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), ContactsModule, CollaboratorModule, StoreModule, TransactionModule, EvaluationsModule]
})
export class AppModule { }
