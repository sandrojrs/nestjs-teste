import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { Collaborator } from './collaborator.entity';
import { CollaboratorService } from './collaborator.service';


@Controller('collaborator')
export class CollaboratorController {
    constructor(private collaboratorService: CollaboratorService) { }


    @Post('create')
    create(@Body() collaborator: Collaborator) {
        return this.collaboratorService.create(collaborator);
    }

    @Get('findAll')
    findAll() {
        return this.collaboratorService.findAll();
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
