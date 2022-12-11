import { AppDataSource } from "../../dataSource"
import { Message } from "../../models/Message"
import { Room } from "../../models/Room"



export abstract class MessageService {

    public static async sendMessage(roomId: number, message: Message){
        const room = await AppDataSource.manager.findOne(Room, {where: {id: roomId}})

        await AppDataSource.manager.save(message)
        await AppDataSource.createQueryBuilder().relation(Room, "messages").of(room).add(message)

        return {message: "message sent"}

    }




    public static async getMessages(token: any, roomId: number){

        const room = await AppDataSource.manager.findOne(Room, {where: {id: roomId}})
        const messages = await AppDataSource.manager.find(Message, {relations: ["user"], where: {room : {id: roomId}}})
        return messages

    }

}