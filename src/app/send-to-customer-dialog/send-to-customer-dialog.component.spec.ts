import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToCustomerDialogComponent } from './send-to-customer-dialog.component';

describe('SendToCustomerDialogComponent', () => {
  let component: SendToCustomerDialogComponent;
  let fixture: ComponentFixture<SendToCustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToCustomerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendToCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
