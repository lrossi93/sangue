import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePRegistryComponent } from './sample-p-registry.component';

describe('SamplePRegistryComponent', () => {
  let component: SamplePRegistryComponent;
  let fixture: ComponentFixture<SamplePRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
