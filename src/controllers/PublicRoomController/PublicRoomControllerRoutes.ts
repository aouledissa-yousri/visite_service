import { PublicRoomController } from "./PublicRoomController" 
import express from "express" 

let publicRoomControllerRoutes = express.Router()

//put your routes here

publicRoomControllerRoutes.post("/create", (request, response) => PublicRoomController.createRoom(request.headers.token, request.body).then(result => response.send(result)))

export { publicRoomControllerRoutes }