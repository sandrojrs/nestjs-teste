import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Collaborator } from '../collaborator/collaborator.entity';
import { Customer } from '../customer/customers.entity';
import { Store } from '../store/store.entity';

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    date: Date;

    @Column()
    @IsNotEmpty()
    value: number;

    @OneToOne(() => Customer)
    @JoinColumn()
    @IsNotEmpty()
    customer: Customer;

    @OneToOne(() => Store)
    @JoinColumn()
    @IsNotEmpty()
    store: Store;

    @OneToOne(() => Collaborator)
    @JoinColumn()
    @IsNotEmpty()
    collaborator: Collaborator;

}

