import { UserController } from "./UserController" 
import express from "express" 

let userControllerRoutes = express.Router()

//put your routes here

userControllerRoutes.get("/rooms", (request, response) => UserController.getSubscribedRooms(request.headers.token).then(result => response.send(result)))

export { userControllerRoutes }