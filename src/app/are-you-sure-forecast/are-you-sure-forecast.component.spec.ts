import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSureForecastComponent } from './are-you-sure-forecast.component';

describe('AreYouSureForecastComponent', () => {
  let component: AreYouSureForecastComponent;
  let fixture: ComponentFixture<AreYouSureForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouSureForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreYouSureForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
