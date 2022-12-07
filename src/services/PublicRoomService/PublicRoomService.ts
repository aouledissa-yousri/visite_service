import { AppDataSource } from '../../dataSource';
import { PublicRoom } from '../../models/PublicRoom';
import { Room } from '../../models/Room';
import { User } from '../../models/User';



export abstract class PublicRoomService {


    public static async createRoom(id: number, room: PublicRoom){
        const users = await AppDataSource.manager.find(User, {where: {id: id}})

        await AppDataSource.createQueryBuilder().insert().into(Room).values(room.getData()).execute()
        await AppDataSource.createQueryBuilder().relation(User, "privateSubscribers").of(users[0]).add(room)

        return {"message": "Room created successfully"}
    }


}