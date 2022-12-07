import jwtDecode from "jwt-decode"
import { KeyError } from "../../errors/KeyError";
import { PrivateRoom } from "../../models/PrivateRoom";
import { CreateRoomPayload } from "../../payloads/CreateRoomPayload";
import { PrivateRoomService } from '../../services/PrivateRoomService/PrivateRoomService';


export abstract class PrivateRoomController {



    public static async createRoom(token: any, payload: any){
        
        try{
            const createRoomPayload = CreateRoomPayload.createRoomPayload(payload)

            return PrivateRoomService.createRoom(jwtDecode(token)["id"], new PrivateRoom(createRoomPayload.getRoomName()))


        }catch(error){

            if(error instanceof KeyError)
                return {message: "invalid payload"}
            
            return {message: "Unknown error"}
        }
    }
    
}