
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    constructor(private http: HttpClient) { }



    // Get all messages
    getMessages() {
        return this.http.get(' http://localhost:8088/messages');
    }
    
    // Send a message
    sendMessage(message: any) {
        return this.http.post('http://localhost:8088/messages', message);
    }


}

