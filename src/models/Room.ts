import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { Message } from './Message';

@Entity()
export abstract class Room {


    @PrimaryGeneratedColumn({type: "bigint"}) id: number
    @Column() private name: string
    @Column() private type: string


    @OneToMany(() => Message, message => message.room)
    @JoinTable() messages: Message[]


    constructor(name: string, type: string){
        this.setId()
        this.name = name
        this.type = type
    }

    public getName(): string {
        return this.name
    }

    public getType(): string {
        return this.type
    }

    public setId(){
        this.id = Math.floor(Math.random() * (999999999999 - 1) + 1)
    }


    public getData(){
        return {
            id: this.id,
            name: this.name,
            type: this.type
        }
    }


}