/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExploreServiceService } from './ExploreService.service';

describe('Service: ExploreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExploreServiceService]
    });
  });

  it('should ...', inject([ExploreServiceService], (service: ExploreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
