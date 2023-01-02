import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAsReceivedDialogComponent } from './mark-as-received-dialog.component';

describe('MarkAsReceivedDialogComponent', () => {
  let component: MarkAsReceivedDialogComponent;
  let fixture: ComponentFixture<MarkAsReceivedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkAsReceivedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkAsReceivedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
