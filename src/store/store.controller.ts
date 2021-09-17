import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Store } from './store.entity';
import { StoreService } from './store.service';


@Controller('store')
export class StoreController {
    constructor(private storeService: StoreService) { }


    @Get()
    async findAll() {
        try {
            const store = await this.storeService.findAll();
            return {
                statusCode: HttpStatus.OK,
                message: 'Busca realizada com sucesso',
                store
            };

        } catch (error) {
            return error
        }

    }

    @Post()
    async createStore(@Body() stores: Store) {

        try {
            const store = await this.storeService.create(stores);
            return {
                statusCode: HttpStatus.OK,
                message: 'Loja criada com sucesso',
                store
            };

        } catch (error) {
            return error

        }

    }

    @Put(':id')
    async uppdate(@Param('id') id: number, @Body() store: Store) {
        try {
            await this.storeService.update(id, store);
            return {
                statusCode: HttpStatus.OK,
                message: 'Loja atualizado com sucesso',
            };

        } catch (error) {
            return error
        }

    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            await this.storeService.destroy(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Loja excluida com sucesso',
            };

        } catch (error) {
            return error
        }

    }
}
