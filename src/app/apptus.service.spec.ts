import { TestBed } from '@angular/core/testing';

import { ApptusService } from './apptus.service';

describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApptusService = TestBed.get(ApptusService);
    expect(service).toBeTruthy();
  });
});
