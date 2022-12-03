import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { Message } from './Message';

@Entity()
export abstract class Room {

    @PrimaryGeneratedColumn() id: number
    @Column() name: string
    @Column() type: string


    @OneToMany(() => Message, message => message.room)
    @JoinTable() messages: Message[]


}