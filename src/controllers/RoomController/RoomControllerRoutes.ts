import { RoomController } from "./RoomController" 
import express from "express" 

let roomControllerRoutes = express.Router()

//put your routes here

roomControllerRoutes.get("/", (request, response) => RoomController.getRooms().then(result => response.send(result)))

export { roomControllerRoutes }