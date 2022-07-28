import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSureProductComponent } from './are-you-sure-product.component';

describe('AreYouSureProductComponent', () => {
  let component: AreYouSureProductComponent;
  let fixture: ComponentFixture<AreYouSureProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouSureProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreYouSureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
