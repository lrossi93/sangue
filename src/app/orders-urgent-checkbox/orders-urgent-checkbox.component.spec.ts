import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersUrgentCheckboxComponent } from './orders-urgent-checkbox.component';

describe('OrdersUrgentCheckboxComponent', () => {
  let component: OrdersUrgentCheckboxComponent;
  let fixture: ComponentFixture<OrdersUrgentCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersUrgentCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersUrgentCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
