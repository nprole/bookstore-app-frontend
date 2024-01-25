import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Subscription} from "rxjs";
import {ThemeService} from "../../../../../services/theme.service";

export interface ErrorDialogData {
    title: string;
    message: string | string[];
}

@Component({
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent implements OnInit {
    title: ErrorDialogData['title'];
    message: any[];
    isDark: boolean;
    subs: Subscription[];

    constructor(
        @Inject(MAT_DIALOG_DATA) data: ErrorDialogData,
        private themeService: ThemeService
    ) {
        this.subs = [];
        this.isDark = true;
        const s = this.themeService.isDarkThemeSubject.subscribe({
            next: (isDarkTheme) => {
                this.isDark = isDarkTheme;
            }
        });
        this.subs.push(s);

        this.title = data.title || 'Error';
        this.message =
            data.message instanceof Array ? data.message : [data.message || ''];
    }


    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subs.forEach(s => s.unsubscribe());
    }
}
