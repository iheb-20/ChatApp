import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../Models/User.model";
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {
    }

    users: User[] = [];

    getAllUsers(): Observable<User[]> {
        const userID = localStorage.getItem("userID")?.toString(); // Assuming userID is stored in localStorage
        return this.http.get<User[]>('http://localhost:8088/chatapp/users').pipe(
            map(users => {
                // Filter users based on userID
                return users.filter(user => user.id != userID);
            })
        );
    }


    adduser(user: User): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:8088/api/v1/auth/register', user, {
            headers: headers,
            responseType: 'text' // Set the responseType to 'text'
        });
    }


}
