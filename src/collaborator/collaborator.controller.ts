import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Collaborator } from './collaborator.entity';
import { CollaboratorService } from './collaborator.service';


@Controller('collaborator')
export class CollaboratorController {
    constructor(private collaboratorService: CollaboratorService) { }



    @Get()
    async findAll() {
        const users = await this.collaboratorService.findAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'Busca realizada com sucesso',
            users
        };
    }

    @Post()
    async createUsers(@Body() collaborator: Collaborator) {
        const user = await this.collaboratorService.create(collaborator);
        return {
            statusCode: HttpStatus.OK,
            message: 'Colaborador criado com sucesso',
            user
        };
    }

    @Patch(':id')
    async uppdate(@Param('id') id: number, @Body() collaborator: Collaborator) {
        await this.collaboratorService.update(id, collaborator);
        return {
            statusCode: HttpStatus.OK,
            message: 'Colaborador atualizado com sucesso',
        };
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.collaboratorService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Colaborador excluido com sucesso',
        };
    }
}
