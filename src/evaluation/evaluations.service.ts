
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './evaluations.entity'

@Injectable()
export class EvaluationsService {

    constructor(
        @InjectRepository(Evaluation)
        private EvaluationsRepository: Repository<Evaluation>
    ) { }

    async findAll(): Promise<Evaluation[]> {
        return this.EvaluationsRepository.find();
    }

    async create(evaluation: Evaluation) {
        this.EvaluationsRepository.create(evaluation)
        return this.EvaluationsRepository.save(evaluation);
    }

    async update(evaluation: Evaluation) {
        this.EvaluationsRepository.save(evaluation)
    }

    async delete(evaluation: Evaluation) {
        this.EvaluationsRepository.delete(evaluation);
    }

}



