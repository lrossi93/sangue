import { TestBed } from '@angular/core/testing';

import { ColumnStateService } from './column-state.service';

describe('ColumnStateService', () => {
  let service: ColumnStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
