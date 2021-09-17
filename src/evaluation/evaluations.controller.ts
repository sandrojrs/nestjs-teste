import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { Evaluation } from './evaluations.entity';
import { EvaluationsService } from './evaluations.service';


@Controller('evaluation')
export class EvaluationsController {
    constructor(private evaluationService: EvaluationsService) { }


    @Get()
    async findAll() {
        try {
            const users = await this.evaluationService.findAll();
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
    async createEvaluations(@Body() evaluations: Evaluation) {
        try {
            const evaluation = await this.evaluationService.create(evaluations);
            return {
                statusCode: HttpStatus.OK,
                message: 'Avaliação criada com sucesso',
                evaluation
            };

        } catch (error) {

            return error

        }

    }
}
