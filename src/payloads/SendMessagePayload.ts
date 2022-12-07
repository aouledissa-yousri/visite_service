import { KeyError } from "../errors/KeyError"





export class SendMessagePayload{


    constructor(private message: string, private time: string, private roomId: number){}

    public getMessage(): string{
        return this.message
    }

    public getTime(): string{
        return this.time
    }

    public getRoomId(): number{
        return this.roomId
    }

    public setMessage(message: string){
        if(message == undefined)
            throw new KeyError("Invalid key")
        this.message = message
    }

    public setTime(time: string){
        if(time == undefined)
            throw new KeyError("Invalid key")
        this.time = time
    }

    public setRoomId(roomId: number){
        if(roomId == undefined)
            throw new KeyError("Invalid key")
        this.roomId = roomId
    }

    public static createSendMessagePayload(payload: any, roomId: number): SendMessagePayload{
        let sendMessagePayload = new SendMessagePayload("", "", 0)
        sendMessagePayload.setMessage(payload.message)
        sendMessagePayload.setTime(payload.time)
        sendMessagePayload.setRoomId(roomId)
        return sendMessagePayload
    }
}