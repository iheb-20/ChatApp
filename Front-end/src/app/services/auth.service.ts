import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router, private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.http.post<any>('http://localhost:8088/api/v1/auth/authenticate', { email, password }).pipe(
            tap(response => {
                if (response && response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userID', response.userId);
                    localStorage.setItem('userName', response.userName);
                }
            })
        );
    }

    logout(): Observable<any> {
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        localStorage.removeItem('userName');
        return this.http.delete(`http://localhost:8088/chatapp/logout`);
    }

    getCurrentUser(): any {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenParts = token.split('.'); // Split token into header, payload, and signature
            if (tokenParts.length === 3) {
                const decodedPayload = atob(tokenParts[1]); // Decode payload (base64)
                const parsedPayload = JSON.parse(decodedPayload); // Parse JSON payload
                return {
                    id: parsedPayload.sub, // Extract 'sub' field from payload
                    name: localStorage.getItem('userName') // Get user's name from localStorage
                };
            } else {
                return null; // Invalid token format
            }
        } else {
            return null; // Token not found
        }
    }
}
