import { PublicRoomController } from "./PublicRoomController" 
import express from "express" 

let publicRoomControllerRoutes = express.Router()

//put your routes here

publicRoomControllerRoutes.get("/", (request, response) => response.send("Express TS"))

export { publicRoomControllerRoutes }