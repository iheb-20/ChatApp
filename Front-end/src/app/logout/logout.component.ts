import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    private currentUser!: null;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    logout(): any {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/login']);
            localStorage.removeItem('token');
        });
    }
}
