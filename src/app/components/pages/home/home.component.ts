import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../features/auth/service/auth.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    content?: string;
    user: any;
    darkTheme: boolean;
    loggedIn: boolean;

    constructor(
        private authService: AuthService
    ) {
        this.loggedIn = false;
        this.darkTheme = true;
        this.authService.user$.subscribe({
            next: (user: any) => {
                this.loggedIn = user?.id?.length > 0;

                if (this.loggedIn) {
                    this.user = user;
                } else {
                    this.user = null;
                    this.loggedIn = false;
                }
            }
        });
    }

    ngOnInit(): void {
    }
}
