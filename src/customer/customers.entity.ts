import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsCPF, IsPhone } from 'brazilian-class-validator';


@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsEmail({}, {
        message: 'Digite um email valido',
    })
    email: string;

    @Column()
    @IsPhone({ message: 'Digite um telefone Valido' })
    phone: string;

    @Column()
    @IsNotEmpty()
    @IsCPF({ message: 'Digite um CPF valido' })
    cpf: string;
}
