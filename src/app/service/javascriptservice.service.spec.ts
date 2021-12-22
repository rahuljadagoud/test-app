import { TestBed } from '@angular/core/testing';

import { JavascriptserviceService } from './javascriptservice.service';

describe('JavascriptserviceService', () => {
  let service: JavascriptserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavascriptserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
