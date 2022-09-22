import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownProductsForecastComponent } from './dropdown-products-forecast.component';

describe('DropdownProductsForecastComponent', () => {
  let component: DropdownProductsForecastComponent;
  let fixture: ComponentFixture<DropdownProductsForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownProductsForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownProductsForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
