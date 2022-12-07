import express from "express"
import { roomControllerRoutes } from "./controllers/RoomController/RoomControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/room", roomControllerRoutes)


export { routes }