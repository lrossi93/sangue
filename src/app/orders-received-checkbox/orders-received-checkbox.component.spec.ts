import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersReceivedCheckboxComponent } from './orders-received-checkbox.component';

describe('OrdersReceivedCheckboxComponent', () => {
  let component: OrdersReceivedCheckboxComponent;
  let fixture: ComponentFixture<OrdersReceivedCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersReceivedCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersReceivedCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
