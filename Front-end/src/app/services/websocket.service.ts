import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import * as io from 'socket.io-client';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class webSocketService {
    private socket$: Subject<MessageEvent> | undefined;
    constructor() {

    }
    connect(url: string): Subject<MessageEvent> {
        if (!this.socket$) {
            this.socket$= new Subject();
            const sock = new Client(url);

            sock.onopen = () => {
                this.socket$?.subscribe((response) => console.log("response",response));
            };

            sock.onmessage = (event) => {
                this.socket$.next(event);
            };

            sock.onerror = (error) => {
                this.socket.error(error);  // Handle errors using `do` operator (optional)
            };

            sock.onclose = () => {
                this.socket$.complete();
            };
        }
        return this.socket$.asObservable();
    }
    public sendMessage(message: string) {
        if (this.socket$) {
            this.socket$.(message);
        }
    }
}



