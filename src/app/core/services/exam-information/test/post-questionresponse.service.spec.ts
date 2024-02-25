import { TestBed } from '@angular/core/testing';

import { PostQuestionresponseService } from '../post-questionresponse.service';

describe('PostQuestionresponseService', () => {
  let service: PostQuestionresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostQuestionresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
