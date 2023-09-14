import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDdtUploadDialogComponent } from './order-ddt-upload-dialog.component';

describe('OrderDdtUploadDialogComponent', () => {
  let component: OrderDdtUploadDialogComponent;
  let fixture: ComponentFixture<OrderDdtUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDdtUploadDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDdtUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
