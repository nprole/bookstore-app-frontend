import {Route} from '@angular/router';
import {AuthGuard} from "./components/features/auth/guard/auth.guard";
import {RegisterPageComponent} from "./components/features/auth/pages/register-page/register-page.component";
import {LoginPageComponent} from "./components/features/auth/pages/login-page/login-page.component";
import {BuildLogComponent} from "./components/pages/build-log/build-log.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {ShopComponent} from "./components/pages/shop/shop.component";
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
    {path: '', component: AppComponent},
    {path: 'build-log', component: BuildLogComponent},
    {path: 'home', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
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
    }
];
