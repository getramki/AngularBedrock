import { TestBed } from '@angular/core/testing';

import { CallGenAIAPIService } from './call-gen-aiapi.service';

describe('CallGenAIAPIService', () => {
  let service: CallGenAIAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallGenAIAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
