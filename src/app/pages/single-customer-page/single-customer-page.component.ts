import { Component } from '@angular/core';
import {CustomerApiService} from '../../core';

@Component({
  selector: 'app-single-customer-page',
  standalone: true,
  imports: [],
  providers: [CustomerApiService],
  templateUrl: './single-customer-page.component.html',
  styleUrl: './single-customer-page.component.css'
})
export class SingleCustomerPageComponent {

  constructor() {
  }
}
