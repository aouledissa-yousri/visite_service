import { RoomService } from '../../services/RoomService/RoomService';



export abstract class RoomController {

    public static async getRooms(){
        return await RoomService.getRooms()
    }
}