import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteOrderComponent } from './button-delete-order.component';

describe('ButtonDeleteOrderComponent', () => {
  let component: ButtonDeleteOrderComponent;
  let fixture: ComponentFixture<ButtonDeleteOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDeleteOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDeleteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
