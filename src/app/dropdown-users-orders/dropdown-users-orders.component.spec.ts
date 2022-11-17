import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUsersOrdersComponent } from './dropdown-users-orders.component';

describe('DropdownUsersOrdersComponent', () => {
  let component: DropdownUsersOrdersComponent;
  let fixture: ComponentFixture<DropdownUsersOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownUsersOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownUsersOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
