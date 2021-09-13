import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { Transaction } from './Transactions.entity';
import { TransactionService } from './Transactions.service';


@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService) { }

    // @Post('create')
    // create(@Body() transactions: Transaction) {
    //     return this.transactionService.create(transactions);
    // }

    // @Get('findAll')
    // findAll() {
    //     return this.transactionService.findAll();
    // }


    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    //     return this.customerService.update(+id, updateCustomerDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.customerService.remove(+id);
    // }
}

