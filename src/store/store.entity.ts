import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Store {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty({ message: "O campo não pode ser vazio" })
    name: string;
}
