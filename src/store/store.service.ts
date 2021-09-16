
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity'

@Injectable()
export class StoreService {

    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>
    ) { }

    async findAll() {
        return await this.storeRepository.find();
    }

    async create(store: Store) {
        const user = this.storeRepository.create(store);
        await this.storeRepository.save(store);
        return user;
    }

    async update(id: number, store: Store) {
        await this.storeRepository.update({ id }, store);
        return await this.storeRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.storeRepository.delete({ id });
        return { deleted: true };
    }

}


