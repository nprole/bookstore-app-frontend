import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {ShopComponent} from './components/pages/shop/shop.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorDialogInterceptor} from "../core/interceptor/error-dialog.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthTokenInterceptor} from "./components/features/auth/interceptor/auth-token.interceptor";
import {AuthService} from "./components/features/auth/service/auth.service";
import {APP_BASE_HREF, CommonModule, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";
import {HomeComponent} from "./components/pages/home/home.component";
import {ToolbarModule} from "primeng/toolbar";
import {SplitButtonModule} from "primeng/splitbutton";
import {TopbarComponent} from "./components/pages/topbar/topbar.component";
import {AppMenuComponent} from "./components/pages/menu/app.menu.component";
import {SidebarComponent} from "./components/pages/sidebar/sidebar.component";
import {OrderListModule} from "primeng/orderlist";
import {PickListModule} from "primeng/picklist";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {ProductService} from "./layout/service/product.service";
import {MenuService} from "./layout/service/app.menu.service";
import {AppConfigModule} from "./layout/config/config.module";
import {AppMenuitemComponent} from "./components/pages/menu/app.menuitem.component";
import {MenuModule} from "primeng/menu";
import {SharedModule} from "./components/shared/shared.module";
import {AuthModule} from "./components/features/auth/auth.module";
import {BooksService} from "./servies/books.service";
import {DialogModule} from "primeng/dialog";

const initialize = (authService: AuthService) => async () => {
    if (authService.getAccessToken()) {
        try {
            await authService.getProfile();
        } catch {
        }
    }
};

@NgModule({
    declarations: [
        AppComponent,
        ShopComponent,
        TopbarComponent,
        HomeComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        SidebarComponent
    ],
    imports: [
        AppConfigModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
        BrowserAnimationsModule,
        CommonModule,
        CoreModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ToolbarModule,
        SplitButtonModule,
        OrderListModule,
        PickListModule,
        DataViewModule,
        DropdownModule,
        DialogModule,
        RatingModule,
        MenuModule,
        SharedModule,
        AuthModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        ProductService,
        MenuService,
        BooksService,
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
    exports: [
        TopbarComponent,
        SidebarComponent
    ]
})
export class AppModule {
}
