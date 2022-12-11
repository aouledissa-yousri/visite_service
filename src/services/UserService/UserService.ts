import { AppDataSource } from '../../dataSource';
import { Room } from '../../models/Room';
import { User } from '../../models/User';



export abstract class UserService {


    public static async getSubscribedRooms(userId: number){
        const user = await User.getUserById(userId)
        const rooms = await AppDataSource.manager.findOne(User, {relations: ["privateSubscribers", "publicSubscribers"], where: {id: userId}})
        return rooms
    }
}