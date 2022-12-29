import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersToCustomerComponent } from './orders-to-customer.component';

describe('OrdersToCustomerComponent', () => {
  let component: OrdersToCustomerComponent;
  let fixture: ComponentFixture<OrdersToCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersToCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersToCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
