/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectServiceService } from './ProjectService.service';

describe('Service: ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectServiceService]
    });
  });

  it('should ...', inject([ProjectServiceService], (service: ProjectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
