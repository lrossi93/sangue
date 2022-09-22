import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUsersForecastComponent } from './dropdown-users-forecast.component';

describe('DropdownUsersForecastComponent', () => {
  let component: DropdownUsersForecastComponent;
  let fixture: ComponentFixture<DropdownUsersForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownUsersForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownUsersForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
