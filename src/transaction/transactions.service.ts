import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collaborator } from 'src/collaborator/collaborator.entity';
import { Repository } from 'typeorm';
import { Transaction } from './Transactions.entity'

@Injectable()
export class TransactionService {

    constructor(
        @InjectRepository(Transaction)
        private transactionRepository: Repository<Transaction>

    ) { }


    async findAll() {
        return await this.transactionRepository.find({ relations: ['collaborator', 'customer', 'store', 'evaluation'] });
    }

    async create(transaction: Transaction) {
        const user = this.transactionRepository.create(transaction);
        await this.transactionRepository.save(transaction);
        return user;
    }

    async update(id: number, transaction: Transaction) {
        await this.transactionRepository.update({ id }, transaction);
        return await this.transactionRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.transactionRepository.delete({ id });
        return { deleted: true };
    }

}


