import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersValidatedCheckboxComponent } from './orders-validated-checkbox.component';

describe('OrdersValidatedCheckboxComponent', () => {
  let component: OrdersValidatedCheckboxComponent;
  let fixture: ComponentFixture<OrdersValidatedCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersValidatedCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersValidatedCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
