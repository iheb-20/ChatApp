  import {Component, Input, OnInit} from '@angular/core';
  import {Observable} from "rxjs";
  import {ChatMessage} from "../../../../Models/ChatMessage.model";
  import {ChatmessageserviceService} from "../../../../services/chatmessageservice.service";
  @Component({
    selector: 'app-chatmessage',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.css']
  })
  export class ChatMessageComponent implements OnInit {


    chatMessage$!:Observable<ChatMessage>;
    @Input() chatMessage!:ChatMessage;

    id!:number;
    chatId!:string;
    senderId!:string;
    recipientId!:string;
    content!:string;
    timestamp!:Date;
    currentUserId! : string | undefined;
    constructor(chatMessageService: ChatmessageserviceService) { }

    ngOnInit(): void {
      this.currentUserId = localStorage.getItem("userID")?.toString();
    }

  }
