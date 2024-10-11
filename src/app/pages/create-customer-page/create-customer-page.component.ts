import {Component} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {ChipsModule} from 'primeng/chips';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Customer, CustomerApiService, CustomerCreate} from '../../core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer-page',
  standalone: true,
  imports: [
    ButtonDirective,
    Ripple,
    ChipsModule,
    ReactiveFormsModule,
  ],
  providers: [CustomerApiService],
  templateUrl: './create-customer-page.component.html',
  styleUrl: './create-customer-page.component.css'
})
export class CreateCustomerPageComponent {
  createCustomerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerApiService: CustomerApiService,
    private router: Router) {
    this.createCustomerForm = this.buildCreateCustomerForm();
  }

  private buildCreateCustomerForm() {
    return this.formBuilder.group({
      address: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passportNo: [''],
      phoneNo: ['']
    });
  }

  submitCreateCustomerForm() {
    if (this.createCustomerForm.invalid)
      return;

    const customerCreate: CustomerCreate = this.createCustomerForm.getRawValue();

    this.customerApiService.createCustomer(customerCreate)
      .subscribe({next: (response) => this.handleCreateCustomerResponse(response)})
  }

  private handleCreateCustomerResponse = async (response: Customer) => {
    await this.router.navigate(['customer', response.id])
  }
}
