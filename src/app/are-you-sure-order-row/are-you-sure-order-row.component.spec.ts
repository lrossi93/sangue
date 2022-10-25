import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSureOrderRowComponent } from './are-you-sure-order-row.component';

describe('AreYouSureOrderRowComponent', () => {
  let component: AreYouSureOrderRowComponent;
  let fixture: ComponentFixture<AreYouSureOrderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouSureOrderRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYouSureOrderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
