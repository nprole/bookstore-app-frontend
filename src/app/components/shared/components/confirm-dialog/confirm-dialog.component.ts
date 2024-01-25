import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ThemeService} from "../../../../services/theme.service";

export interface ConfirmDialogData {
    title: string;
    description: string | string[];
}

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
    title: ConfirmDialogData['title'];
    description: ConfirmDialogData['description'];
    darkTheme: boolean;

    constructor(
        @Inject(MAT_DIALOG_DATA) data: ConfirmDialogData,
        private dialogRef: MatDialogRef<ConfirmDialogComponent>,
        private themeService: ThemeService
    ) {
        this.darkTheme = this.themeService.isDarkThemeSubject.getValue();
        this.title = data?.title || 'Are you sure?';
        this.description =
            data?.description || 'You are not going to be able to undo this action';
        this.themeService.isDarkThemeSubject.subscribe({
            next: (isDark) => {
                this.darkTheme = isDark;
            }
        });
    }

    ngOnInit(): void {
    }

    accept(): void {
        this.dialogRef.close(true);
    }

    close(): void {
        this.dialogRef.close(false);
    }
}
