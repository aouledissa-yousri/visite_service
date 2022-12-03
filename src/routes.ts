import express from "express"
import { messageControllerRoutes } from "./controllers/MessageController/MessageControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/", messageControllerRoutes)


export { routes }