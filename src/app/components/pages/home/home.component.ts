import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../features/auth/service/auth.service";
import {ThemeService} from "../../../services/theme.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    content?: string;
    //  numberPicks: any[];
    user: any;
    darkTheme: boolean;
    loggedIn: boolean;

    constructor(
        private themeService: ThemeService,
        private authService: AuthService
    ) {
        this.loggedIn = false;
        this.darkTheme = true;
        this.themeService.isDarkThemeSubject.subscribe(
            {
                next: (isDarkTheme) => {
                    this.darkTheme = isDarkTheme;
                }
            }
        )
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
        /*        this.numberPicks = [
                    {'pick': 1, 'id': 0, 'toggled': false},
                    {'pick': 1, 'id': 1, 'toggled': false},
                    {'pick': 1, 'id': 2, 'toggled': false},
                    {'pick': 1, 'id': 3, 'toggled': false},
                    {'pick': 1, 'id': 4, 'toggled': false},
                    {'pick': 1, 'id': 5, 'toggled': false},
                    {'pick': 1, 'id': 6, 'toggled': false},
                    {'pick': 1, 'id': 7, 'toggled': false}
                ];*/
        /*
                this.numberPicks = [
                    { 'pick': 713, 'toggled': false },
                    { 'pick': 1, 'toggled': false },
                    { 'pick': 129, 'toggled': false },
                    { 'pick': 1, 'toggled': false },
                    { 'pick': 325, 'toggled': false },
                    { 'pick': 1, 'toggled': false },
                    { 'pick': 32, 'toggled': false },
                    { 'pick': 1, 'toggled': false }
                ];*/
    }

    ngOnInit(): void {
    }
}
