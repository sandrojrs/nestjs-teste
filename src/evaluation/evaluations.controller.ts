import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { Evaluation } from './evaluations.entity';
import { EvaluationsService } from './evaluations.service';


@Controller('evaluation')
export class EvaluationsController {
    constructor(private evaluationService: EvaluationsService) { }


    @Get()
    async findAll() {
        const users = await this.evaluationService.findAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'Busca realizada com sucesso',
            users
        };
    }

    @Post()
    async createUsers(@Body() evaluation: Evaluation) {
        const user = await this.evaluationService.create(evaluation);
        return {
            statusCode: HttpStatus.OK,
            message: 'Avaliação criada com sucesso',
            user
        };
    }
}
