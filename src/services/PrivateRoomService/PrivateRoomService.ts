import { AppDataSource } from '../../dataSource';
import { User } from '../../models/User';
import { Room } from "../../models/Room";
import { PrivateRoom } from '../../models/PrivateRoom';

export abstract class PrivateRoomService {


    public static async createRoom(id: number, room: PrivateRoom){
        const users = await AppDataSource.manager.find(User, {where: {id: id}})

        await AppDataSource.createQueryBuilder().insert().into(Room).values(room.getData()).execute()
        await AppDataSource.createQueryBuilder().relation(User, "privateSubscribers").of(users[0]).add(room)

        return {"message": "Room created successfully"}
    }

    public static async joinRoom(userId: number, roomId: number){

        const user = await AppDataSource.manager.findOne(User, {where: {id: userId}})
        const room = await AppDataSource.manager.findOne(Room, {where: {id: roomId}})

        await AppDataSource.createQueryBuilder().relation(User, "privateSubscribers").of(user).add(room)

        return {"message": "You have joined room " + roomId}

    }

    public static async leaveRoom(userId: number, roomId: number){

        const user = await AppDataSource.manager.findOne(User, {where: {id: userId}})
        const room = await AppDataSource.manager.findOne(Room, {where: {id: roomId}})

        AppDataSource.createQueryBuilder().relation(User, "privateSubscribers").of(user).remove(room)

        return {"message": "You have left room " + roomId}

    }
}