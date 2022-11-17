import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersExtraCheckboxComponent } from './orders-extra-checkbox.component';

describe('OrdersExtraCheckboxComponent', () => {
  let component: OrdersExtraCheckboxComponent;
  let fixture: ComponentFixture<OrdersExtraCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersExtraCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersExtraCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
