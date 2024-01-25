import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [RegisterPageComponent, LoginPageComponent],
  providers: [],
    imports: [CommonModule, SharedModule],
  exports: [ RegisterPageComponent, LoginPageComponent],
})
export class AuthModule {}
