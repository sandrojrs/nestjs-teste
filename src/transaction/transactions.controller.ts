import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
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

    @Put(':id')
    async update(@Param('id') id: number, @Body() transaction: Transaction) {
        try {
            const updates = await this.transactionService.update(id, transaction);
            return {
                statusCode: HttpStatus.OK,
                message: 'Transação atualizada com sucesso',
                updates
            };

        } catch (error) {
            return error
        }

    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            const deleteId = await this.transactionService.destroy(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Transação excluida com sucesso',
                deleteId
            };
        } catch (error) {
            return
        }

    }
}

