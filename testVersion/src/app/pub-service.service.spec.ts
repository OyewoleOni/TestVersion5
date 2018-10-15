import { TestBed, inject } from '@angular/core/testing';

import { PubServiceService } from './pub-service.service';

describe('PubServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PubServiceService]
    });
  });

  it('should be created', inject([PubServiceService], (service: PubServiceService) => {
    expect(service).toBeTruthy();
  }));
});
