import { KeyError } from "../errors/KeyError"


export class CreateRoomPayload{

    constructor(private roomName: string){}

    public getRoomName(): string{
        return this.roomName
    }

    public setRoomName(roomName: string){
        if(roomName == undefined)
            throw new KeyError("invalid key")

        this.roomName = roomName
    }

    public static createRoomPayload(payload: any){
        let createRoomPayload = new CreateRoomPayload("")
        createRoomPayload.setRoomName(payload.name)
        return createRoomPayload
    }
}