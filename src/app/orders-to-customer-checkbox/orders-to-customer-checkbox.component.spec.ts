import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersToCustomerCheckboxComponent } from './orders-to-customer-checkbox.component';

describe('OrdersToCustomerCheckboxComponent', () => {
  let component: OrdersToCustomerCheckboxComponent;
  let fixture: ComponentFixture<OrdersToCustomerCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersToCustomerCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersToCustomerCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
