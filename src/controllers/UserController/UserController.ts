import { checkAccessToken } from "../../decorators";
import { UserService } from '../../services/UserService/UserService';
import jwtDecode from 'jwt-decode';

export abstract class UserController {

    @checkAccessToken()
    public static async getSubscribedRooms(token: any){
        return await UserService.getSubscribedRooms(jwtDecode(token)["id"])
    }

}