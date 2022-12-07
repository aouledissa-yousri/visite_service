import { Room } from './Room';

export class PrivateRoom extends Room{

    constructor(name: string){
        super(name, "private")
    }

    
}