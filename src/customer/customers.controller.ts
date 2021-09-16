import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Customer } from './customers.entity';
import { CustomersService } from './customers.service';


@Controller('customer')

export class CustomersController {
    constructor(private customerService: CustomersService) { }


    @Get()
    async findAll() {
        const users = await this.customerService.findAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'Busca realizada com sucesso',
            users
        };
    }

    @Post()
    createUsers(@Body() customer: Customer) {
        return this.customerService.create(customer);
    }

    @Patch(':id')
    async uppdate(@Param('id') id: number, @Body() customer: Customer) {
        await this.customerService.update(id, customer);
        return {
            statusCode: HttpStatus.OK,
            message: 'Cliente atualizado com sucesso',
        };
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.customerService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Cliente excluido com sucesso',
        };
    }
}
