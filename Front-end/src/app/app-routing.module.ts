import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./chatroom/users-list/user/user.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChatroomComponent} from "./chatroom/chatroom.component";
import {UsersListComponent} from "./chatroom/users-list/users-list.component";
import {ChatwindowComponent} from "./chatroom/chatwindow/chatwindow.component";
import {AuthGuard} from "./Guards/auth.guard";
import {LoginGuard} from "./Guards/login.guard";
import {MessagesComponent} from "./chatroom/chatwindow/messages/messages.component";

const routes :Routes =[
    {path:'',redirectTo:'/chatroom',pathMatch:'full'},
    {path:'login' , component:LoginComponent, canActivate: [LoginGuard]},
    {path:'register' , component:RegisterComponent, canActivate: [LoginGuard]},
    {path:'chatroom' , component:ChatroomComponent, canActivate: [AuthGuard]},
    {path:'user' , component:UserComponent},
    {path:'messages' , component:MessagesComponent, canActivate: [AuthGuard]},
    {path:'chatwindow' , component:ChatwindowComponent, canActivate: [AuthGuard]},
    {path:'users-list' , component:UsersListComponent, canActivate: [AuthGuard]},
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
