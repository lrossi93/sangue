import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSupplyReportComponent } from './button-supply-report.component';

describe('ButtonSupplyReportComponent', () => {
  let component: ButtonSupplyReportComponent;
  let fixture: ComponentFixture<ButtonSupplyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSupplyReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSupplyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
