import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOrderReportComponent } from './button-order-report.component';

describe('ButtonOrderReportComponent', () => {
  let component: ButtonOrderReportComponent;
  let fixture: ComponentFixture<ButtonOrderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonOrderReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
