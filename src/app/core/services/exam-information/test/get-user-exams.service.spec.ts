import { TestBed } from '@angular/core/testing';

import { GetUserExamsService } from '../get-user-exams.service';

describe('GetUserExamsService', () => {
  let service: GetUserExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
