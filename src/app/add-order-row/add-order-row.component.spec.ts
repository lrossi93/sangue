import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderRowComponent } from './add-order-row.component';

describe('AddOrderRowComponent', () => {
  let component: AddOrderRowComponent;
  let fixture: ComponentFixture<AddOrderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
