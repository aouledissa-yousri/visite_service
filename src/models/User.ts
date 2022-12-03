import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Room } from "./Room";

@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn() id: number
    @Column({name: "username"}) username: string
    @Column() password: string
    @Column() salt: string

    @ManyToMany(() => Room)
    @JoinTable() privateSubscribers: Room[]

    @ManyToMany(() => Room)
    @JoinTable() publicSubscribers: Room[]


}