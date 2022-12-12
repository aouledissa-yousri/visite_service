import { VisiteTechniqueController } from "./VisiteTechniqueController" 
import express from "express" 

let visiteTechniqueControllerRoutes = express.Router()

//put your routes here

visiteTechniqueControllerRoutes.patch("/:cin/valider", (request, response) => VisiteTechniqueController.validerVisite(parseInt(request.params.cin)).then(result => response.send(result)))

export { visiteTechniqueControllerRoutes }