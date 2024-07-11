import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    email!: string;
    password!: string;
  constructor( private router: Router,
               private authService: AuthService) {}

  ngOnInit(): void {
  }
  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
        (response) => {
            if (response && response.token) {
                try {
                    if (response.token) {
                        localStorage.setItem('token', response.token);
                        this.router.navigateByUrl('chatroom').then(r => console.log('navigated to chatroom'));
                    } else {
                        console.log("Invalid Credentials");
                    }
                }
        catch
            (e)
            {
                console.log(e);
            }
        }
            else {
                console.log("Invalid Credentials");
            }
        }
    );
  }


  onRegister() {
    this.router.navigateByUrl('register').then(r => console.log('navigated to register'));
  }

}

