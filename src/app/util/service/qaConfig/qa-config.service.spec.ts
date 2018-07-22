import { TestBed, inject } from '@angular/core/testing';

import { QaConfigService } from './qa-config.service';
import { HttpModule } from '../../../../../node_modules/@angular/http';

describe('QaConfigServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QaConfigService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([QaConfigService], (service: QaConfigService) => {
    expect(service).toBeTruthy();
  }));
});
