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
}