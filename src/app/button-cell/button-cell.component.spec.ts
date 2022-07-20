import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCellComponent } from './button-cell.component';

describe('ButtonCellComponent', () => {
  let component: ButtonCellComponent;
  let fixture: ComponentFixture<ButtonCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
