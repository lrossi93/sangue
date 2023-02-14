import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastReportComponent } from './forecast-report.component';

describe('ForecastReportComponent', () => {
  let component: ForecastReportComponent;
  let fixture: ComponentFixture<ForecastReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
