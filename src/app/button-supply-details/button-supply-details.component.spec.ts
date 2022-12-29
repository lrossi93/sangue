import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSupplyDetailsComponent } from './button-supply-details.component';

describe('ButtonSupplyDetailsComponent', () => {
  let component: ButtonSupplyDetailsComponent;
  let fixture: ComponentFixture<ButtonSupplyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSupplyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSupplyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
