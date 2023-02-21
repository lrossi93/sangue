import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoanDetailsComponent } from './button-loan-details.component';

describe('ButtonLoanDetailsComponent', () => {
  let component: ButtonLoanDetailsComponent;
  let fixture: ComponentFixture<ButtonLoanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLoanDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
