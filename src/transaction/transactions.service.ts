import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './Transactions.entity'

@Injectable()
export class TransactionService {

    constructor(
        @InjectRepository(Transaction)
        private TransactionRepository: Repository<Transaction>

    ) { }

    async findAll(): Promise<Transaction[]> {
        return this.TransactionRepository.find({ relations: ['customer', 'collaborator', 'store'] });
    }

    async create(transaction: Transaction) {
        this.TransactionRepository.create(transaction)
        return this.TransactionRepository.save(transaction)
    }

    async update(transaction: Transaction) {
        this.TransactionRepository.save(transaction)
    }

    async delete(transaction: Transaction) {
        this.TransactionRepository.delete(transaction);
    }

}


