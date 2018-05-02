import { TestBed, inject } from '@angular/core/testing';

import { SchedulingStubService } from './scheduling-stub.service';

describe('SchedulingStubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedulingStubService]
    });
  });

  it('should be created', inject([SchedulingStubService], (service: SchedulingStubService) => {
    expect(service).toBeTruthy();
  }));
});
