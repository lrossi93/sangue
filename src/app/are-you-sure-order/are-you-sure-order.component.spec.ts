import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSureOrderComponent } from './are-you-sure-order.component';

describe('AreYouSureOrderComponent', () => {
  let component: AreYouSureOrderComponent;
  let fixture: ComponentFixture<AreYouSureOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouSureOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYouSureOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
