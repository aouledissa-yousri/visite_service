import express from "express"
import { visiteTechniqueControllerRoutes } from "./controllers/VisiteTechniqueController/VisiteTechniqueControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/visite", visiteTechniqueControllerRoutes)

export { routes }