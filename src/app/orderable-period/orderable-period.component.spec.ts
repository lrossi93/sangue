import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderablePeriodComponent } from './orderable-period.component';

describe('OrderablePeriodComponent', () => {
  let component: OrderablePeriodComponent;
  let fixture: ComponentFixture<OrderablePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderablePeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderablePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
