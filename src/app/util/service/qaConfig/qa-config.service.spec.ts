import { TestBed, inject } from '@angular/core/testing';

import { QaConfigService } from './qa-config.service';

describe('QaConfigServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QaConfigService]
    });
  });

  it('should be created', inject([QaConfigService], (service: QaConfigService) => {
    expect(service).toBeTruthy();
  }));
});
