import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdtOrderActionsComponent } from './ddt-order-actions.component';

describe('DdtOrderActionsComponent', () => {
  let component: DdtOrderActionsComponent;
  let fixture: ComponentFixture<DdtOrderActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdtOrderActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdtOrderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
