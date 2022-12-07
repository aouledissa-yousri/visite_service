import jwtDecode from 'jwt-decode';
import { PublicRoom } from '../../models/PublicRoom';
import { PublicRoomService } from '../../services/PublicRoomService/PublicRoomService';
import { CreateRoomPayload } from '../../payloads/CreateRoomPayload';
import { KeyError } from '../../errors/KeyError';



export abstract class PublicRoomController {


    public static async createRoom(token: any, payload: any){
        
        try{
            const createRoomPayload = CreateRoomPayload.createRoomPayload(payload)

            return PublicRoomService.createRoom(jwtDecode(token)["id"], new PublicRoom(createRoomPayload.getRoomName()))

        }catch(error){

            if(error instanceof KeyError)
                return {message: "invalid payload"}
            
            return {message: "Unknown error"}
        }
    }
}