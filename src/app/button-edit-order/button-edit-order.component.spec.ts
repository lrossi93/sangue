import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditOrderComponent } from './button-edit-order.component';

describe('ButtonEditOrderComponent', () => {
  let component: ButtonEditOrderComponent;
  let fixture: ComponentFixture<ButtonEditOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
