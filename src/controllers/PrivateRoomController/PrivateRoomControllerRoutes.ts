import express from "express" 
import { PrivateRoomController } from "./PrivateRoomController" 

let privateRoomControllerRoutes = express.Router()

//put your routes here

privateRoomControllerRoutes.post("/create", (request, response) => PrivateRoomController.createRoom(request.headers.token, request.body).then(result => response.send(result)))
privateRoomControllerRoutes.patch("/:id/join", (request, response) => PrivateRoomController.joinRoom(request.headers.token, parseInt(request.params.id)).then(result => response.send(result)))
privateRoomControllerRoutes.patch("/:id/leave", (request, response) => PrivateRoomController.leaveRoom(request.headers.token, parseInt(request.params.id)).then(result => response.send(result)))


export { privateRoomControllerRoutes }