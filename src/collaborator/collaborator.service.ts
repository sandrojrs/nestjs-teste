
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collaborator } from './collaborator.entity'

@Injectable()
export class CollaboratorService {

    constructor(
        @InjectRepository(Collaborator)
        private collaboratorRepository: Repository<Collaborator>
    ) { }

    async findAll() {
        return await this.collaboratorRepository.find();
    }

    async create(collaborator: Collaborator) {
        const user = this.collaboratorRepository.create(collaborator);
        await this.collaboratorRepository.save(collaborator);
        return user;
    }

    async update(id: number, collaborator: Collaborator) {
        await this.collaboratorRepository.update({ id }, collaborator);
        return await this.collaboratorRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.collaboratorRepository.delete({ id });
        return { deleted: true };
    }

}

