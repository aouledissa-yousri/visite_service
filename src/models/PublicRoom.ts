import { Room } from './Room';

export class PublicRoom extends Room{

    constructor(name: string){
        super(name, "public")
    }

}