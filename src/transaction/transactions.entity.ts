import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Evaluation } from 'src/evaluation/evaluations.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Collaborator } from '../collaborator/collaborator.entity';
import { Customer } from '../customer/customers.entity';
import { Store } from '../store/store.entity';

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty({ message: "A data não pode ser vazia" })
    date: Date;

    @ApiProperty()
    @Column()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    value: number;

    @ApiProperty()
    @OneToOne(() => Customer, { cascade: ['insert', 'remove'] })
    @JoinColumn()
    @IsNotEmpty({ message: "O id do cliente não pode ser vazio" })
    customer: Customer;

    @ApiProperty()
    @OneToOne(() => Store, { cascade: ['insert', 'remove'] })
    @JoinColumn()
    @IsNotEmpty({ message: "A loja deve ser preenchida" })
    store: Store;

    @ApiProperty()
    @OneToOne(() => Collaborator, { cascade: ['insert', 'remove'] })
    @JoinColumn()
    @IsNotEmpty({ message: "O colaborador deve ser preenchido" })
    collaborator: Collaborator;

    @OneToMany(() => Evaluation, evaluation => evaluation.transaction)
    evaluation: Evaluation[];
}


