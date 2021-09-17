import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Transaction } from './Transactions.entity';
import { TransactionService } from './Transactions.service';


@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService) { }

    @Get()
    async findAll() {
        try {
            const transaction = await this.transactionService.findAll();
            return {
                statusCode: HttpStatus.OK,
                message: 'Busca realizada com sucesso',
                transaction
            };

        } catch (error) {
            return error

        }

    }

    @Post()
    async createTransaction(@Body() transactions: Transaction) {
        try {
            const transaction = await this.transactionService.create(transactions);
            return {
                statusCode: HttpStatus.OK,
                message: 'Transação criada com sucesso',
                transaction
            };

        } catch (error) {
            return error
        }

    }

    @Patch(':id')
    async uppdate(@Param('id') id: number, @Body() Transaction: Transaction) {
        try {
            await this.transactionService.update(id, Transaction);
            return {
                statusCode: HttpStatus.OK,
                message: 'Transação atualizada com sucesso',
            };

        } catch (error) {
            return error
        }

    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            await this.transactionService.destroy(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Transação excluida com sucesso',
            };
        } catch (error) {
            return
        }

    }
}

