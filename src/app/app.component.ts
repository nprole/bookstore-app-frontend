import {Component} from '@angular/core';
import {AuthService} from "./components/features/auth/service/auth.service";
import {Router} from "@angular/router";
import {Subject, Subscription} from "rxjs";
import {ThemeService} from "../services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookstore-app';
  loggedIn: boolean;
  user: any;
  isDark: boolean;
  subs: Subscription[] = [];
  destroy$ = new Subject();

  constructor(
      private router: Router,
      private themeService: ThemeService,
      private authService: AuthService,
  ) {
    this.user = null;
    this.loggedIn = false;
    this.isDark = true;
    let s = this.authService.user$.subscribe({
      next: (user: any) => {
        this.loggedIn = user?.id?.length > 0;
        if (user?._id?.length) {
          this.user = user;
        } else {
          this.user = null;
        }
      }
    });
    this.subs.push(s);

    s = this.themeService.isDarkThemeSubject.subscribe(
        {
          next: (isDark: boolean) => {
            this.isDark = isDark;
          }
        }
    );
    this.subs.push(s);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }


  logout() {
    this.authService.logout();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeService.toggleDarkTheme();
  }
}
