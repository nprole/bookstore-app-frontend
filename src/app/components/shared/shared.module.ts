import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';

@NgModule({
  declarations: [ConfirmDialogComponent, ErrorDialogComponent, LoadingOverlayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ConfirmDialogComponent,
    ErrorDialogComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    LoadingOverlayComponent
  ],
})
export class SharedModule {}
