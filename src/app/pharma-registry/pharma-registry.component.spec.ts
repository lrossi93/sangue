import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaRegistryComponent } from './pharma-registry.component';

describe('PharmaRegistryComponent', () => {
  let component: PharmaRegistryComponent;
  let fixture: ComponentFixture<PharmaRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
