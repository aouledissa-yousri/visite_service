import { AppDataSource } from '../../dataSource';
import { Room } from '../../models/Room';
import { User } from '../../models/User';


export abstract class RoomService {

    public static async getRooms(){
        return await AppDataSource.manager.find(Room)
    }

}