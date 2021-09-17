import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Transaction } from 'src/transaction/Transactions.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Evaluation {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    value: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    comments: string;

    @ApiProperty()
    @OneToOne(() => Transaction)
    @JoinColumn()
    transaction: Transaction;

}

