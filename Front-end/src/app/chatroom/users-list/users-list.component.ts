import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../Models/User.model";
import {UserService} from "../../services/user.service";
import {ChatmessageserviceService} from "../../services/chatmessageservice.service";
import {ChatMessage} from "../../Models/ChatMessage.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  user!: User[];
  users$!: Observable<User[]>;
  messages$!:Observable<ChatMessage[]>

  selectedUserId: number | undefined;
  constructor( private userService : UserService, private chatMessageService:ChatmessageserviceService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  }
  userID = localStorage.getItem('userID');
  selectUser(user: User) {
    this.selectedUserId = user.id;
    if (this.selectedUserId) {
      localStorage.setItem('selectedUserId',this.selectedUserId.toString());

    }
  }



}
