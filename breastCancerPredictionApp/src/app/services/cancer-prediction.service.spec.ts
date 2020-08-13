import { TestBed } from '@angular/core/testing';

import { CancerPredictionService } from './cancer-prediction.service';

describe('CancerPredictionService', () => {
  let service: CancerPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancerPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
