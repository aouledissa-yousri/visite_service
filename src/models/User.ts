import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { AppDataSource } from "../dataSource";
import { Room } from "./Room";

@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn("increment") id: number
    @Column({name: "username"}) private username: string
    @Column() private password: string
    @Column() private salt: string

    @ManyToMany(() => Room)
    @JoinTable() privateSubscribers: Room[]

    @ManyToMany(() => Room)
    @JoinTable() publicSubscribers: Room[]


    public getId(): number{
        return this.id
    }


    public getUsername(): string{
        return this.username
    }

    public setUsername(username: string){
        this.username = username
    }

    public static async getUserById(id: number){
        const user = await AppDataSource.manager.findOne(User, {where: {id: id}})
        return user
    }




}