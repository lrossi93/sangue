import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderRowComponent } from './edit-order-row.component';

describe('EditOrderRowComponent', () => {
  let component: EditOrderRowComponent;
  let fixture: ComponentFixture<EditOrderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrderRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
