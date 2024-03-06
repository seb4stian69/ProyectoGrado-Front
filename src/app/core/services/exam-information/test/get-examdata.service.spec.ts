import { TestBed } from '@angular/core/testing';

import { GetExamdataService } from '../get-examdata.service';

describe('GetExamdataService', () => {
  let service: GetExamdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExamdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
