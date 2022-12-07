import jwtDecode from "jwt-decode"
import { checkAccessToken } from "../../decorators"
import { KeyError } from "../../errors/KeyError"
import { Message } from "../../models/Message"
import { SendMessagePayload } from "../../payloads/SendMessagePayload"
import { MessageService } from "../../services/MessageService/MessageService"

export abstract class MessageController {

    @checkAccessToken()
    public static async getMessages(token: any, roomId: number){

        return await MessageService.getMessages(token, roomId)

    }

    @checkAccessToken()
    public static async sendMessage(token:any, payload: any, roomId: number){

        try{

            const sendMessagePayload = SendMessagePayload.createSendMessagePayload(payload, roomId)
            return MessageService.sendMessage(sendMessagePayload.getRoomId(), await Message.createMessage(sendMessagePayload.getMessage(), sendMessagePayload.getTime(), jwtDecode(token)["id"]))
    

        }catch(error){

            if(error instanceof KeyError)
                return {message: "invalid payload"}
            
            return {message: "Unknown error"}

        }
    }
}