import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {LoadingOverlayComponent} from './components/loading-overlay/loading-overlay.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {MatDialogActions, MatDialogContainer, MatDialogContent} from "@angular/material/dialog";

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        ErrorDialogComponent,
        LoadingOverlayComponent
    ],
    imports: [
        CommonModule,
        DialogModule,
        ButtonModule,
        MatDialogActions,
        MatDialogContent,
        MatDialogContainer,
    ],
    exports: [
        ConfirmDialogComponent,
        ErrorDialogComponent,
        LoadingOverlayComponent
    ],
})
export class SharedModule {
}
