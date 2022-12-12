import { AppDataSource } from '../../dataSource';
import { VisiteTechnique } from '../../models/VisiteTechnique';



export abstract class VisiteTechniqueController {

    public static async validerVisite(cin: number){

        AppDataSource.createQueryBuilder().update(VisiteTechnique).set({valide: true}).where("cin = :cin", {cin: cin}).execute()
        let visite = await AppDataSource.manager.findOne(VisiteTechnique, {where: {cin: cin}})

        if(visite == null) visite = new VisiteTechnique()

        return visite
    }

}