
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

    async findAll(): Promise<Collaborator[]> {
        return this.collaboratorRepository.find();
    }

    async create(collaborator: Collaborator) {
        this.collaboratorRepository.create(collaborator)
        return this.collaboratorRepository.save(collaborator)
    }

    async update(collaborator: Collaborator) {
        this.collaboratorRepository.save(collaborator)
    }

    async delete(collaborator: Collaborator) {
        this.collaboratorRepository.delete(collaborator);
    }

}

