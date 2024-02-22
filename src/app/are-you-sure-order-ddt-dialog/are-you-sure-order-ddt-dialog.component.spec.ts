import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSureOrderDdtDialogComponent } from './are-you-sure-order-ddt-dialog.component';

describe('AreYouSureOrderDdtDialogComponent', () => {
  let component: AreYouSureOrderDdtDialogComponent;
  let fixture: ComponentFixture<AreYouSureOrderDdtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouSureOrderDdtDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYouSureOrderDdtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
