import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { Customer } from './customers.entity';
import { CustomersService } from './customers.service';


@Controller('customer')

export class CustomersController {
    constructor(private customerService: CustomersService) { }


    @Post('create')
    create(@Body() customer: Customer) {
        return this.customerService.create(customer);
    }

    @Get('findAll')
    findAll() {
        return this.customerService.findAll();
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number) {
        return this.customerService.findOne(+id);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    //     return this.customerService.update(+id, updateCustomerDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.customerService.remove(+id);
    // }
}
