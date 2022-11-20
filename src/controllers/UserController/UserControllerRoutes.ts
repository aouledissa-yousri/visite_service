import { UserController } from "./UserController" 
import express from "express" 

let userControllerRoutes = express.Router()

//put your routes here

userControllerRoutes.get("/", (request, response) => response.send("Express TS"))

export { userControllerRoutes }