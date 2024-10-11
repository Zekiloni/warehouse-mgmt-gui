import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MenuModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
