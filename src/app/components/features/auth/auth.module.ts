import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SharedModule} from "../../shared/shared.module";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatCard, MatCardActions, MatCardTitle} from "@angular/material/card";


@NgModule({
  declarations: [RegisterPageComponent, LoginPageComponent],
  providers: [],
  imports: [CommonModule, SharedModule, MatFormField, MatCard, MatCardActions, MatError, MatCardTitle],
  exports: [ RegisterPageComponent, LoginPageComponent],
})
export class AuthModule {}
