import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';
import {AuthService, User} from '../../service/auth.service';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss', '../auth-pages.common.scss'],
})
export class LoginPageComponent implements OnDestroy {
    loginForm: FormGroup;
    loading = false;
    darkTheme: boolean;
    subs: Subscription[];

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
        private authService: AuthService,
    ) {
        this.subs = [];
        this.darkTheme = true;
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });

    }

    ngOnDestroy(): void {
        this.loginForm.reset();
        this.loading = false;
        this.subs.forEach(s => s.unsubscribe());
    }

    submit() {
        if (this.loading) {
            return;
        }

        this.loading = true;

        const user = this.loginForm.value;
        if (this.loginForm.valid) {
            // Perform login logic here
            this.authService
                .login(user)
                .pipe(take(1))
                .subscribe({
                    next: (response: any) => {
                        return this.authService.redirectToCallback()
                    },
                    error: () => {
                        this.loading = false;

                        this.loginForm.patchValue({
                            password: '',
                        });
                    },
                });
        } else {
            // Mark all fields as touched to trigger validation messages
            Object.keys(this.loginForm.controls).forEach(key => {
                this.loginForm.get(key)?.markAsTouched();
            });
        }
    }
}
