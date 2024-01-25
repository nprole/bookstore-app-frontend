import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorDialogInterceptor} from './interceptor/error-dialog.interceptor';

@NgModule({
    imports: [CommonModule],
    providers: [ErrorDialogInterceptor],
})
export class CoreModule {
}
