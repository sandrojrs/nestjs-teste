import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Customer } from './customers.entity';
import { CustomersService } from './customers.service';


@Controller('customer')

export class CustomersController {
    constructor(private customerService: CustomersService) { }


    @Get()
    async findAll() {
        try {
            const users = await this.customerService.findAll();
            return {
                statusCode: HttpStatus.OK,
                message: 'Busca realizada com sucesso',
                users
            };

        } catch (error) {
            return error
        }

    }

    @Post()
    async createCustomers(@Body() customers: Customer) {
        try {
            const customer = await this.customerService.create(customers);
            return {
                statusCode: HttpStatus.OK,
                message: 'Cliente criado com sucesso',
                customer
            };
        } catch (error) {
            return error
        }

    }

    @Patch(':id')
    async uppdate(@Param('id') id: number, @Body() customer: Customer) {
        try {
            await this.customerService.update(id, customer);
            return {
                statusCode: HttpStatus.OK,
                message: 'Cliente atualizado com sucesso',
            };

        } catch (error) {
            return error
        }

    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            await this.customerService.destroy(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Cliente excluido com sucesso',
            };

        } catch (error) {
            return error
        }

    }
}
