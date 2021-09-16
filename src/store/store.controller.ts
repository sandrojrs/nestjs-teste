import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Store } from './store.entity';
import { StoreService } from './store.service';


@Controller('store')
export class StoreController {
    constructor(private storeService: StoreService) { }


    @Get()
    async findAll() {
        const users = await this.storeService.findAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'Busca realizada com sucesso',
            users
        };
    }

    @Post()
    async createUsers(@Body() store: Store) {
        const user = await this.storeService.create(store);
        return {
            statusCode: HttpStatus.OK,
            message: 'Cliente criado com sucesso',
            user
        };
    }

    @Patch(':id')
    async uppdate(@Param('id') id: number, @Body() store: Store) {
        await this.storeService.update(id, store);
        return {
            statusCode: HttpStatus.OK,
            message: 'Cliente atualizado com sucesso',
        };
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.storeService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Cliente excluido com sucesso',
        };
    }
}
