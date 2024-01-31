import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {LayoutService} from "../../../layout/service/app.layout.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {
    this.items = [
      {
        label: 'Authentication',
        items: [
          {
            label: 'Register',
            icon: 'pi pi-fw pi-plus'
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-user-edit'
          }
        ]
      }];
  }
}
