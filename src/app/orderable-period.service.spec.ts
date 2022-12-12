import { TestBed } from '@angular/core/testing';

import { OrderablePeriodService } from './orderable-period.service';

describe('OrderablePeriodService', () => {
  let service: OrderablePeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderablePeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
