import { PublicRoomController } from "./PublicRoomController" 
import express from "express" 

let publicRoomControllerRoutes = express.Router()

//put your routes here

publicRoomControllerRoutes.post("/create", (request, response) => PublicRoomController.createRoom(request.headers.token, request.body).then(result => response.send(result)))
publicRoomControllerRoutes.patch("/:id/join", (request, response) => PublicRoomController.joinRoom(request.headers.token, parseInt(request.params.id)).then(result => response.send(result)))
publicRoomControllerRoutes.patch("/:id/leave", (request, response) => PublicRoomController.leaveRoom(request.headers.token, parseInt(request.params.id)).then(result => response.send(result)))


export { publicRoomControllerRoutes }