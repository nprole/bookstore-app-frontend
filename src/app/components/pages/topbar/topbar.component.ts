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

  constructor(public layoutService: LayoutService) {
  }
}
