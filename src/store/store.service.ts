
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity'

@Injectable()
export class StoreService {

    constructor(
        @InjectRepository(Store)
        private StoreRepository: Repository<Store>
    ) { }

    async findAll(): Promise<Store[]> {
        return await this.StoreRepository.find();
    }

    async create(store: Store) {
        this.StoreRepository.create(store)
        return await this.StoreRepository.save(store)
    }

    async update(store: Store) {
        this.StoreRepository.save(store)
    }

    async delete(store: Store) {
        this.StoreRepository.delete(store);
    }

}


