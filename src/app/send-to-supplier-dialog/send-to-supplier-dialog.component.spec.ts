import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToSupplierDialogComponent } from './send-to-supplier-dialog.component';

describe('SendToSupplierDialogComponent', () => {
  let component: SendToSupplierDialogComponent;
  let fixture: ComponentFixture<SendToSupplierDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToSupplierDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendToSupplierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
