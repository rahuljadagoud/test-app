import { TestBed } from '@angular/core/testing';

import { HtmlserviceService } from './htmlservice.service';

describe('HtmlserviceService', () => {
  let service: HtmlserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
