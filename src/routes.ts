import express from "express"
import { messageControllerRoutes } from "./controllers/MessageController/MessageControllerRoutes"
import { privateRoomControllerRoutes } from "./controllers/PrivateRoomController/PrivateRoomControllerRoutes"
import { publicRoomControllerRoutes } from "./controllers/PublicRoomController/PublicRoomControllerRoutes"
import { roomControllerRoutes } from "./controllers/RoomController/RoomControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/privateRoom", privateRoomControllerRoutes)
routes.use("/publicRoom", publicRoomControllerRoutes)
routes.use("/room", roomControllerRoutes)


export { routes }