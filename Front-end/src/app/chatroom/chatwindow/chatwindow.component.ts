import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatmessageserviceService } from '../../services/chatmessageservice.service';
import { ChatMessage } from "../../Models/ChatMessage.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.css']
})
export class ChatwindowComponent implements OnInit, OnDestroy {

  chatMessage?: string;
  selectedUserName: string | undefined;

  constructor(private chatMessageService: ChatmessageserviceService, private http: HttpClient) {}


  ngOnInit() {
  }


  selectUserName(user: any) {
    this.selectedUserName = user.firstname;
  }

  sendMessage() {
    console.log(`Inside sendMessage`, this.chatMessage);
    if (!this.chatMessage) return; // No need to send empty messages

    const newMessage: { senderId: string; recipientId: string; content: string } = {
      senderId: localStorage.getItem('userID')!,
      recipientId: localStorage.getItem('selectedUserId')!,
      content: this.chatMessage,
    };

    this.chatMessageService.postChatMessage(newMessage).subscribe(response => {
      console.log('Message sent successfully:', response);
      // You can handle success response here, if needed
    }, error => {
      console.error('Error sending message:', error);
      // You can handle error response here, if needed
    });

    // Clear the input after sending the message
    this.chatMessage = '';
  }


  OnSubmit() {
    this.sendMessage();
  }

  ngOnDestroy() {}
}
