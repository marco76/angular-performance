import { TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategyService } from './change-detection-strategy.service';

describe('ChangeDetectionStrategyService', () => {
  let service: ChangeDetectionStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDetectionStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
