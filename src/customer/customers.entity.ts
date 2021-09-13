import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';


@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsNotEmpty()
    telephone: string;

    @Column()
    @IsNotEmpty()
    cpf: string;
}
