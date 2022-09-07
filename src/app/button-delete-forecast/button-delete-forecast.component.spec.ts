import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteForecastComponent } from './button-delete-forecast.component';

describe('ButtonDeleteForecastComponent', () => {
  let component: ButtonDeleteForecastComponent;
  let fixture: ComponentFixture<ButtonDeleteForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDeleteForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDeleteForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
