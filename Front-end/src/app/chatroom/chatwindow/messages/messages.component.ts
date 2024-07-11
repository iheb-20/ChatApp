import { Component, OnInit } from '@angular/core';
import {ChatmessageserviceService} from "../../../services/chatmessageservice.service";
import {ChatMessage} from "../../../Models/ChatMessage.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  chatmessage!:ChatMessage
  messages$!:Observable<ChatMessage[]>


  constructor(private chatMessageService: ChatmessageserviceService,private router:Router) { }

  ngOnInit(): void
    {
    this.messages$ = this.chatMessageService.getAllChatMessages( localStorage.getItem('userID')!,localStorage.getItem('selectedUserId')!);

    }


}
