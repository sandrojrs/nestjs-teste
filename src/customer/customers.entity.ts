import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsCPF, IsPhone } from 'brazilian-class-validator';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @Column({ unique: true })
    @IsEmail({}, {
        message: 'Digite um email valido',
    })
    email: string;

    @ApiProperty()
    @Column({ unique: true })
    @IsPhone({ message: 'Digite um telefone Valido' })
    phone: string;

    @ApiProperty()
    @Column({ unique: true })
    @IsNotEmpty()
    @IsCPF({ message: 'Digite um CPF valido' })
    cpf: string;
}
