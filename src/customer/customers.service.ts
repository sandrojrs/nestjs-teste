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

    async findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
    }

    async create(customer: Customer) {
        this.customerRepository.create(customer)
        return this.customerRepository.save(customer);
    }

    async findOne(_id: number): Promise<Customer[]> {
        return await this.customerRepository.find({
            select: ["name", "email", "telephone", "cpf"],
            where: [{ "id": _id }]
        });
    }

    async update(customer: Customer) {
        this.customerRepository.save(customer)
    }

    async delete(customer: Customer) {
        this.customerRepository.delete(customer);
    }

}
