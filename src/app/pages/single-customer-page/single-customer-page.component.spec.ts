import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCustomerPageComponent } from './single-customer-page.component';

describe('SingleCustomerPageComponent', () => {
  let component: SingleCustomerPageComponent;
  let fixture: ComponentFixture<SingleCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCustomerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
