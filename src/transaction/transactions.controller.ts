import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Transaction } from './Transactions.entity';
import { TransactionService } from './Transactions.service';


@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService) { }

    @Get()
    async findAll() {
        const users = await this.transactionService.findAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'Busca realizada com sucesso',
            users
        };
    }

    // @Post()
    // async createUsers(@Body() tRANM: Transaction) {
    //     const user = await this.transactionService.create(Transaction);
    //     return {
    //         statusCode: HttpStatus.OK,
    //         message: 'Cliente criado com sucesso',
    //         user
    //     };
    // }

    @Patch(':id')
    async uppdate(@Param('id') id: number, @Body() Transaction: Transaction) {
        await this.transactionService.update(id, Transaction);
        return {
            statusCode: HttpStatus.OK,
            message: 'Cliente atualizado com sucesso',
        };
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.transactionService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Cliente excluido com sucesso',
        };
    }
}

