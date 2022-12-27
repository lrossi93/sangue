import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSentCheckboxComponent } from './orders-sent-checkbox.component';

describe('OrdersSentCheckboxComponent', () => {
  let component: OrdersSentCheckboxComponent;
  let fixture: ComponentFixture<OrdersSentCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSentCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersSentCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
