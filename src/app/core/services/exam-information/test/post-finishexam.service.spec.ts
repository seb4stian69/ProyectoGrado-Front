import { TestBed } from '@angular/core/testing';

import { PostFinishexamService } from '../post-finishexam.service';

describe('PostFinishexamService', () => {
  let service: PostFinishexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFinishexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
