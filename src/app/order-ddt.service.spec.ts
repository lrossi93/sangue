import { TestBed } from '@angular/core/testing';

import { OrderDdtService } from './order-ddt.service';

describe('OrderDdtService', () => {
  let service: OrderDdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDdtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
