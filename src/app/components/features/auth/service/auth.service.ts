import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {BehaviorSubject} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {AuthTokenInterceptor} from '../interceptor/auth-token.interceptor';
import {environment} from "../../../../../environments/environment";
import {ErrorDialogInterceptor} from "../../../../../core/interceptor/error-dialog.interceptor";

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
}

export interface User {
    _id: string;
    username: string;
    password: string;
    email: string;
}

const {api} = environment;

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public user$: BehaviorSubject<User>;

    get user(): any {
        return this.user$.getValue();
    }

    get isAuthenticated(): boolean {
        return (this.user != null && this.user._id?.length > 0);
    }

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        this.user$ = new BehaviorSubject<any>(null);
    }

    login(user: Partial<any>) {
        console.log('LOGIN ENDPOINT');
        return this.http
            .post<TokenResponse>(`${api}/auth/login`, user)
            .pipe(mergeMap(response => this.setTokens(response),
            ));
    }


    register(user: Partial<any>) {
        console.log('REgister endpoint call');
        return this.http
            .post<TokenResponse>(`${api}/auth/register`, user)
            .pipe(mergeMap(response => this.setTokens(response)));
    }

    getProfile() {
        return this.http
            .get<any>(`${api}/auth/me`, {
                headers: {
                    [ErrorDialogInterceptor.skipHeader]: 'true',
                },
            }).subscribe(
                user => {
                    this.user$.next(user)}
            )
    }

    loginWithRefreshToken() {
        return this.http
            .post<TokenResponse>(
                `${api}/auth/refresh-token`,
                {
                    refreshToken: this.getRefreshToken(),
                },
                {
                    headers: {
                        [AuthTokenInterceptor.skipHeader]: 'true',
                    },
                },
            )
            .pipe(mergeMap(response => this.setTokens(response)));
    }

    getEmptyUser(): User {
        return {
            _id: '',
            username: '',
            password: '',
            email: '',
        }
    }

    async setTokens(response: TokenResponse) {
        this.setRefreshToken(response.refresh_token);

        return this.setAccessToken(response.access_token);
    }

    getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    async setAccessToken(token: string) {
        localStorage.setItem('accessToken', token);
        return this.getProfile();
    }

    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    setRefreshToken(token: string) {
        localStorage.setItem('refreshToken', token);
    }

    getLoginCallbackUrl() {
        return localStorage.getItem('loginCallbackUrl');
    }

    setLoginCallbackUrl(url: string) {
        localStorage.setItem('loginCallbackUrl', url);
    }

    async redirectToCallback() {
        const output = await this.router.navigate([
            this.getLoginCallbackUrl() || '/',
        ]);
        this.setLoginCallbackUrl('/');

        return output;
    }


    logout() {
        const callback = () => {
            sessionStorage.clear();

            localStorage.clear();

            this.user$.next(this.getEmptyUser());
        };
/*
        this.subscriptionService
            .delete()
            .pipe(take(1))
            .subscribe(callback, callback);*/
    }
}
