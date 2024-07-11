import {TokenInterceptor} from "./interceptors/TokenInterceptor";


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";

import { UserComponent } from './chatroom/users-list/user/user.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatMessageComponent } from './chatroom/chatwindow/messages/chatmessage/chat-message.component';
import {FormsModule} from "@angular/forms";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './chatroom/users-list/users-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ChatwindowComponent } from './chatroom/chatwindow/chatwindow.component';
import { MessagesComponent } from './chatroom/chatwindow/messages/messages.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGuard} from "./Guards/auth.guard";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ChatroomComponent,
    ChatMessageComponent,


    RegisterComponent,
    UsersListComponent,

    ChatwindowComponent,
     MessagesComponent,
     LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule,
    RouterLinkWithHref,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
