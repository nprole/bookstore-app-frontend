import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from "../../../layout/service/app.layout.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    loggedIn: boolean = false;
    model: any[] = [];

    constructor(public layoutService: LayoutService,
                private router: Router) {
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home']}
                ]
            },
            {
                label: 'Authentication',
                items: [
                    {label: 'Login', icon: 'pi pi-fw pi-user', routerLink: ['/login']},
                    {label: 'Register', icon: 'pi pi-fw pi-user', routerLink: ['/register']}
                ]
            },
            {
                label: 'Backoffice',
                items: [
                    {label: 'Admin panel', icon: 'pi pi-fw pi-cog', routerLink: ['/admin-panel']}
                ]
            },
            {
                label: 'Shop',
                items: [
                    {label: 'Offer', icon: 'pi pi-fw pi-search', routerLink: ['/shop']}
                ]
            }
        ];
    }


    navigate(path: string) {
        this.router.navigate([path]);
    }

    logout() {

    }
}
