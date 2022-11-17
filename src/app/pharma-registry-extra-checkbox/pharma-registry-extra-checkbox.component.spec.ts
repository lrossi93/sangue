import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaRegistryExtraCheckboxComponent } from './pharma-registry-extra-checkbox.component';

describe('PharmaRegistryExtraCheckboxComponent', () => {
  let component: PharmaRegistryExtraCheckboxComponent;
  let fixture: ComponentFixture<PharmaRegistryExtraCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaRegistryExtraCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaRegistryExtraCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
