import { PrivateRoomController } from "./PrivateRoomController" 
import express from "express" 

let privateRoomControllerRoutes = express.Router()

//put your routes here

privateRoomControllerRoutes.post("/create", (request, response) => PrivateRoomController.createRoom(request.headers.token, request.body).then(result => response.send(result)))

export { privateRoomControllerRoutes }