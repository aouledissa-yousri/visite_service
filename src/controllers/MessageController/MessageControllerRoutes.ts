import { MessageController } from "./MessageController" 
import express from "express" 

let messageControllerRoutes = express.Router()

//put your routes here

messageControllerRoutes.post("/message", (request, response) => MessageController.sendMessage().then())

export { messageControllerRoutes }