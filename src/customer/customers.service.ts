import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity'

@Injectable()
export class CustomersService {

    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>
    ) { }

    async findAll() {
        return await this.customerRepository.find();
    }

    async create(customer: Customer) {
        const user = this.customerRepository.create(customer);
        await this.customerRepository.save(customer);
        return user;
    }

    async update(id: number, customer: Customer) {
        await this.customerRepository.update({ id }, customer);
        return await this.customerRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.customerRepository.delete({ id });
        return { deleted: true };
    }

}
