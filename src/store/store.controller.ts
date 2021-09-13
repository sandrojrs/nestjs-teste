import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { Store } from './store.entity';
import { StoreService } from './store.service';


@Controller('store')
export class StoreController {
    constructor(private storeService: StoreService) { }


    @Post('create')
    create(@Body() store: Store) {

        return this.storeService.create(store);
    }

    @Get('findAll')
    findAll() {
        return this.storeService.findAll();
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
