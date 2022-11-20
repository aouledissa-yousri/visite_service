import { MessageController } from "./MessageController" 
import express from "express" 

let messageControllerRoutes = express.Router()

//put your routes here

messageControllerRoutes.get("/", (request, response) => response.send("Express TS"))

export { messageControllerRoutes }