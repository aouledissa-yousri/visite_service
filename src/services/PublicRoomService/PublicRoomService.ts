import { AppDataSource } from '../../dataSource';
import { PublicRoom } from '../../models/PublicRoom';
import { Room } from '../../models/Room';
import { User } from '../../models/User';



export abstract class PublicRoomService {


    public static async createRoom(id: number, room: PublicRoom){
        const users = await AppDataSource.manager.find(User, {where: {id: id}})

        await AppDataSource.createQueryBuilder().insert().into(Room).values(room.getData()).execute()
        await AppDataSource.createQueryBuilder().relation(User, "publicSubscribers").of(users[0]).add(room)

        return {"message": "Room created successfully"}
    }

    public static async joinRoom(userId: number, roomId: number){

        const user = await AppDataSource.manager.findOne(User, {where: {id: userId}})
        const room = await AppDataSource.manager.findOne(Room, {where: {id: roomId}})

        AppDataSource.createQueryBuilder().relation(User, "publicSubscribers").of(user).add(room)

        return {"message": "You have joined room " + roomId}

    }

    public static async leaveRoom(userId: number, roomId: number){

        const user = await AppDataSource.manager.findOne(User, {where: {id: userId}})
        const room = await AppDataSource.manager.findOne(Room, {where: {id: roomId}})

        AppDataSource.createQueryBuilder().relation(User, "publicSubscribers").of(user).remove(room)

        return {"message": "You have left room " + roomId}

    }


}