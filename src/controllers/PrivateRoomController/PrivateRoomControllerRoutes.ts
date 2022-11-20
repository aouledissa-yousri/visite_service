import { PrivateRoomController } from "./PrivateRoomController" 
import express from "express" 

let privateRoomControllerRoutes = express.Router()

//put your routes here

privateRoomControllerRoutes.get("/", (request, response) => response.send("Express TS"))

export { privateRoomControllerRoutes }