import express from "express" 
import { RoomController } from "./RoomController" 
import { privateRoomControllerRoutes } from "../PrivateRoomController/PrivateRoomControllerRoutes"
import { publicRoomControllerRoutes } from "../PublicRoomController/PublicRoomControllerRoutes"
import { MessageController } from "../MessageController/MessageController"

let roomControllerRoutes = express.Router()

//put your routes here

roomControllerRoutes.get("/", (request, response) => RoomController.getRooms().then(result => response.send(result)))
roomControllerRoutes.post("/:id/message", (request, response) => MessageController.sendMessage(request.headers.token, request.body, parseInt(request.params.id)).then(result => response.send(result)))
roomControllerRoutes.get("/:id/message", (request, response) => MessageController.getMessages(request.headers.token, parseInt(request.params.id)).then(result => response.send(result)))

roomControllerRoutes.use("/private", privateRoomControllerRoutes)
roomControllerRoutes.use("/public", publicRoomControllerRoutes)

export { roomControllerRoutes }