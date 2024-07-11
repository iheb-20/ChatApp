import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChatMessage} from "../Models/ChatMessage.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatmessageserviceService {



  constructor(private http: HttpClient) {
  }

  chatmessages: ChatMessage[] = [];





  getAllChatMessages(senderId: string, recipientId: string): Observable<ChatMessage[]> {
    console.log("Inside getAllChatMessages");
    const userID = localStorage.getItem('userID');
    console.log("userID",userID);
    const selectedUserId = localStorage.getItem('selectedUserId');
    console.log("selectedUserId",selectedUserId);
    // Construct the URL with the retrieved values
    const url = `http://localhost:8088/chatapp/messages/${selectedUserId}/${userID}`;
    console.log("url",url);
    const res = this.http.get<ChatMessage[]>(url);
    return res;
  }

  postChatMessage(chatMessage: { senderId: string; recipientId: string; content: string }): Observable<ChatMessage> {
    console.log("Inside postChatMessage");
    const res = this.http.post<ChatMessage>('http://localhost:8088/chatapp/messages', chatMessage);
    return res;
  }


}





