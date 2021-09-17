import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { Collaborator } from './collaborator.entity';
import { CollaboratorService } from './collaborator.service';


@Controller('collaborator')
export class CollaboratorController {
    constructor(private collaboratorService: CollaboratorService) { }



    @Get()
    async findAll() {
        const collaborator = await this.collaboratorService.findAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'Busca realizada com sucesso',
            collaborator
        };
    }

    @Post()
    async createCollaborator(@Body() collaborators: Collaborator) {
        try {
            const collaborador = await this.collaboratorService.create(collaborators);
            return {
                statusCode: HttpStatus.OK,
                message: 'Colaborador criado com sucesso',
                collaborador
            };
        } catch (error) {
            return error
        }

    }

    @Put(':id')
    async uppdate(@Param('id') id: number, @Body() collaborator: Collaborator) {
        try {
            await this.collaboratorService.update(id, collaborator);
            return {
                statusCode: HttpStatus.OK,
                message: 'Colaborador atualizado com sucesso',
            };

        } catch (error) {
            return error
        }

    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            await this.collaboratorService.destroy(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Colaborador excluido com sucesso',
            };

        } catch (error) {
            return error
        }

    }
}
