import { DataSource } from "typeorm";
import { Message } from "./models/Message";
import { PrivateRoom } from './models/PrivateRoom';
import { PublicRoom } from "./models/PublicRoom";
import { Room } from './models/Room';
import { User } from './models/User';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "anon_chat_database",
    synchronize: true,
    logging: true,
    entities: [Message, PrivateRoom, PublicRoom, Room, User],
    subscribers: [],
    migrations: [],
})