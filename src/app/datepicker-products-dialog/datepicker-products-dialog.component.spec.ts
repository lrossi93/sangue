import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerProductsDialogComponent } from './datepicker-products-dialog.component';

describe('DatepickerProductsDialogComponent', () => {
  let component: DatepickerProductsDialogComponent;
  let fixture: ComponentFixture<DatepickerProductsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerProductsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerProductsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
