import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    renderer: Renderer2;
    isDarkThemeSubject: BehaviorSubject<boolean>

    isDark = true;

    constructor(
        private rendererFactory: RendererFactory2
    ) {
        this.setDarkTheme();
        this.isDarkThemeSubject = new BehaviorSubject<boolean>(this.isDark);
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    toggleDarkTheme() {
        if (this.isDark) {
            this.removeTheme('dark-theme');
            this.setLightTheme();
        } else {
          //  this.removeTheme('light-theme');
            this.setDarkTheme();
        }
        this.isDarkThemeSubject.next(this.isDark);
    }

    removeTheme(theme: 'dark-theme' | 'light-theme') {
        this.removeStyle(theme);
        document.body.classList.remove(theme);
    }

    setDarkTheme() {
        const href = '/assets/styles/dark-theme.scss';
        this.getLinkElementForKey('dark-theme').setAttribute('src', href);
        document.body.classList.add('dark-theme');
        this.isDark = true;
    }

    setLightTheme() {
        const href = '/assets/styles/light-theme.scss';
        this.getLinkElementForKey('light-theme').setAttribute('src', href);
        document.body.classList.add('light-theme');
        this.isDark = false;
    }

    removeStyle(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    getLinkElementForKey(key: string) {
        return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
    }

    getExistingLinkElementByKey(key: string) {
        return document.head.querySelector(
            `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
        );
    }

    createLinkElementWithKey(key: string) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.classList.add(this.getClassNameForKey(key));
        document.head.appendChild(linkEl);
        return linkEl;
    }

    getClassNameForKey(key: string) {
        return `style-manager-${key}`;
    }
}
