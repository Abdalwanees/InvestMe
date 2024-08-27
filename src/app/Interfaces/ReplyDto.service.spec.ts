/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReplyDtoService } from './ReplyDto.service';

describe('Service: ReplyDto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplyDtoService]
    });
  });

  it('should ...', inject([ReplyDtoService], (service: ReplyDtoService) => {
    expect(service).toBeTruthy();
  }));
});
