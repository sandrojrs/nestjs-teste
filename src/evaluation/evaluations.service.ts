
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './evaluations.entity'

@Injectable()
export class EvaluationsService {

    constructor(
        @InjectRepository(Evaluation)
        private evaluationsRepository: Repository<Evaluation>
    ) { }

    async findAll() {
        return await this.evaluationsRepository.find({ relations: ['transaction'] });
    }

    async create(evaluation: Evaluation) {
        const user = this.evaluationsRepository.create(evaluation);
        await this.evaluationsRepository.save(evaluation);
        return user;
    }

}



