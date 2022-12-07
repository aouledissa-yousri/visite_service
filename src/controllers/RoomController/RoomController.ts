import { RoomService } from '../../services/RoomService/RoomService';
import jwtDecode from 'jwt-decode';
import { checkAccessToken } from '../../decorators';



export abstract class RoomController {

    @checkAccessToken()
    public static async getRooms(){
        return await RoomService.getRooms()
    }

    
}