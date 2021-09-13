import { Controller, Get, Post, Body } from '@nestjs/common';
import { Evaluation } from './evaluations.entity';
import { EvaluationsService } from './evaluations.service';


@Controller('evaluation')
export class EvaluationsController {
    constructor(private evaluationService: EvaluationsService) { }

    // @Post('create')
    // create(@Body() evaluation: Evaluation) {
    //     return this.evaluationService.create(evaluation);
    // }

    // @Get('findAll')
    // findAll() {
    //     return this.evaluationService.findAll();
    // }


    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    //     return this.evaluationService.update(+id, updateCustomerDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.evaluationService.remove(+id);
    // }
}
