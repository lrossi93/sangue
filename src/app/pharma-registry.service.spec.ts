import { TestBed } from '@angular/core/testing';

import { PharmaRegistryService } from './pharma-registry.service';

describe('PharmaRegistryService', () => {
  let service: PharmaRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmaRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
