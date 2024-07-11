import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {User} from "../Models/User.model";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    firstname: string = "";
    lastname: string = "";
    email: string = "";
    password: string = "";

    constructor(private router: Router, public userService: UserService) {
    }

    ngOnInit(): void {
    }

    registerUser() {
        const newUser: User = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password
        };
        this.userService.adduser(newUser).subscribe(() => {
            // Check if the response contains a success message
            // If it does, log it, but don't treat it as an error
            console.log("User added successfully");

            // Handle successful registration, such as redirecting to another page
            this.router.navigateByUrl('login');
        }, error => {
            // Handle error
            console.error("Error registering user:", error);
        });
    }


    goToLogin() {
        this.router.navigateByUrl('login');
    }
}

