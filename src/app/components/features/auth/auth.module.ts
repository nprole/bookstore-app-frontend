import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SharedModule} from "../../shared/shared.module";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatCard, MatCardActions, MatCardTitle} from "@angular/material/card";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";


@NgModule({
    declarations: [RegisterPageComponent, LoginPageComponent],
    providers: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        SharedModule,
        MatFormField,
        MatCard,
        MatCardActions,
        MatError,
        MatCardTitle,
        CardModule,
        InputTextModule,
        PasswordModule,
        ButtonModule
    ],
    exports: [RegisterPageComponent, LoginPageComponent],
})
export class AuthModule {
}
