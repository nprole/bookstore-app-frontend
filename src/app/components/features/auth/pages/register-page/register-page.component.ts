import {Component, OnDestroy} from '@angular/core';
import {take} from 'rxjs/operators';
import {AuthService} from "../../service/auth.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss', '../auth-pages.common.scss'],
})
export class RegisterPageComponent implements OnDestroy {
    registerForm: FormGroup;
    loading = false;
    subs: Subscription[];
    isDarkTheme: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
    ) {
        this.isDarkTheme = true;
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]]
        });

        this.subs = [];

    }

    ngOnDestroy() {
        this.registerForm.reset();
        this.subs.forEach((s) => s.unsubscribe());
        this.subs = [];
    }

    submit() {
        this.loading = true;

        const user = this.registerForm.value;
        if (this.registerForm.valid) {
            this.authService
                .register(user)
                .pipe(take(1))
                .subscribe({
                    next: () => {
                        this.authService.redirectToCallback();
                    },
                    error: () => {
                        this.loading = false;

                        this.registerForm.patchValue({
                            password: '',
                        });
                    },
                });
        } else {
            // Mark all fields as touched to trigger validation messages
            Object.keys(this.registerForm.controls).forEach(key => {
                this.registerForm.get(key)?.markAsTouched();
            });
        }
    }
}
