import { IsNotEmpty } from 'class-validator';
import { Transaction } from 'src/transaction/Transactions.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Evaluation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    value: number;

    @Column()
    @IsNotEmpty()
    comments: string;

    @OneToOne(() => Transaction)
    @JoinColumn()
    transaction: Transaction;

}

