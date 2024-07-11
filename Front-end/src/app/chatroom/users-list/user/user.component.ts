import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../Models/User.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$!: Observable<User>;
  @Input() user!: User;

  constructor(userService : UserService , private router : Router) { }

  ngOnInit(): void {
  }




}
