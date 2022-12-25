import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCellRendererComponent } from './loading-cell-renderer.component';

describe('LoadingCellRendererComponent', () => {
  let component: LoadingCellRendererComponent;
  let fixture: ComponentFixture<LoadingCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
