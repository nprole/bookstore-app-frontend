import { Route } from '@angular/router';
import {AuthGuard} from "./components/features/auth/guard/auth.guard";
import {RegisterPageComponent} from "./components/features/auth/pages/register-page/register-page.component";
import {LoginPageComponent} from "./components/features/auth/pages/login-page/login-page.component";
import {BuildLogComponent} from "./components/build-log/build-log.component";

export const appRoutes: Route[] = [
    {path: '', redirectTo: '/test', pathMatch: 'full'},
    {path: 'build-log', component: BuildLogComponent},
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [AuthGuard],
        data: {
            requireAuth: false,
        },
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        canActivate: [AuthGuard],
        data: {
            requireAuth: false,
        },
    },
    {path: '**', redirectTo: '/'},
];
