import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Room } from './Room';

@Entity()
export class Message {

    @PrimaryGeneratedColumn("increment") id: number
    @Column() private text: string
    @Column() private time: string

    @ManyToOne(() => User)
    @JoinTable() private user: User

    @ManyToOne(() => Room, room => room.messages)
    room: Room

    private constructor(text: string, time: string) {
        this.text = text
        this.time = time
    }

    public setId(){
        this.id = Math.floor(Math.random() * (999999999999 - 1) + 1)
    }


    public getText(): string {
        return this.text
    }

    public setText(text: string) {
        this.text = text
    }

    public async setUser(userId: number) {
        this.user = await User.getUserById(userId)
    }



    public static async createMessage(text: string, time: string, userId: number){
        let message = new Message(text, time)
        await message.setUser(userId)
        return message
    }

}