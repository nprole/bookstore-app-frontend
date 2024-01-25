import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { AdminPanelComponent } from './components/features/admin-panel/admin-panel.component';
import { ShopComponent } from './components/features/shop/shop.component';
import { BuildLogComponent } from './components/build-log/build-log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ErrorDialogInterceptor} from "../core/interceptor/error-dialog.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthTokenInterceptor} from "./components/features/auth/interceptor/auth-token.interceptor";
import {AuthService} from "./components/features/auth/service/auth.service";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSliderModule} from "@angular/material/slider";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {CoreModule} from "../core/core.module";
import {MatButtonModule} from "@angular/material/button";

function initialize() {

}

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    AdminPanelComponent,
    ShopComponent,
    BuildLogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    CommonModule,
    MatProgressBarModule,
    MatSliderModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    CoreModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      deps: [AuthService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorDialogInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
