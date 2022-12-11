import express from "express"
import { roomControllerRoutes } from "./controllers/RoomController/RoomControllerRoutes"
import { userControllerRoutes } from "./controllers/UserController/UserControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/room", roomControllerRoutes)
routes.use("/user", userControllerRoutes)


export { routes }