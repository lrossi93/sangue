import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaRegistryActiveCheckboxComponent } from './pharma-registry-active-checkbox.component';

describe('PharmaRegistryActiveCheckboxComponent', () => {
  let component: PharmaRegistryActiveCheckboxComponent;
  let fixture: ComponentFixture<PharmaRegistryActiveCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaRegistryActiveCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaRegistryActiveCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
