import { AppDataSource } from '../../dataSource';
import { Room } from '../../models/Room';


export abstract class RoomService {

    public static async getRooms(){
        return await AppDataSource.manager.find(Room)
    }
}