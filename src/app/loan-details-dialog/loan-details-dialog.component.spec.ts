import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsDialogComponent } from './loan-details-dialog.component';

describe('LoanDetailsDialogComponent', () => {
  let component: LoanDetailsDialogComponent;
  let fixture: ComponentFixture<LoanDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
