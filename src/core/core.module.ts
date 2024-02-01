import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorDialogInterceptor} from './interceptor/error-dialog.interceptor';
import {DialogModule} from "primeng/dialog";

@NgModule({
    imports: [CommonModule, DialogModule],
    providers: [ErrorDialogInterceptor],
})
export class CoreModule {
}
