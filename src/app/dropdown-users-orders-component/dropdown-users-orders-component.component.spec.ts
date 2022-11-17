import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUsersOrdersComponentComponent } from './dropdown-users-orders-component.component';

describe('DropdownUsersOrdersComponentComponent', () => {
  let component: DropdownUsersOrdersComponentComponent;
  let fixture: ComponentFixture<DropdownUsersOrdersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownUsersOrdersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownUsersOrdersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
