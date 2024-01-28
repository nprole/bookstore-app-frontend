import {Component} from '@angular/core';
import {AuthService} from "./components/features/auth/service/auth.service";
import {Router} from "@angular/router";
import {Subject, Subscription} from "rxjs";
import {LayoutService} from "./layout/service/app.layout.service";

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
      private authService: AuthService,
      private layoutService: LayoutService
  ) {
    this.isDark = false;
    this.user = null;
    this.loggedIn = false;
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
  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config().colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
      'layout-overlay': this.layoutService.config().menuMode === 'overlay',
      'layout-static': this.layoutService.config().menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config().inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config().ripple
    }
  }
}
