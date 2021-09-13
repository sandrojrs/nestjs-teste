// import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collaborator {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    // @IsNotEmpty()
    name: string;
}

