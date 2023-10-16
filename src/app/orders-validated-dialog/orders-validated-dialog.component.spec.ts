import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersValidatedDialogComponent } from './orders-validated-dialog.component';

describe('OrdersValidatedDialogComponent', () => {
  let component: OrdersValidatedDialogComponent;
  let fixture: ComponentFixture<OrdersValidatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersValidatedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersValidatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
