import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Token {

    @PrimaryGeneratedColumn("increment") id: number
    @Column() cipherText: string

    @ManyToOne(() => User)
    @JoinTable() user: User


}