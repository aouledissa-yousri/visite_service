import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity()
export class VisiteTechnique {


    @PrimaryGeneratedColumn("increment") cin: number
    @Column() private montant: number
    @Column() private matricule: string
    @Column() valide: boolean

}