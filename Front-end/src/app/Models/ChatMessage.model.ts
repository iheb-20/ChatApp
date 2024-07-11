
export class ChatMessage{
    id!:number;
    chatId!:string;
    senderId!:string;
    recipientId!:string;
    content!:string;
    timestamp!:string;
    constructor({id = 0, chatId = "", senderId = "", recipientId = "", content = "",
                timestamp= new Date().toISOString() ,
    }){
        this.id = id
        this.chatId = chatId;
        this.senderId = senderId;
        this.recipientId = recipientId;
        this.content = content;
        this.timestamp = timestamp;
    }

    getSendData(){
        return {
            "senderId": this.senderId,
            "recipientId": this.recipientId,
            "content": this.content,
            "timestamp": this.timestamp,
        }
    }
}
