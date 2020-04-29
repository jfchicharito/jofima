import { TestBed } from '@angular/core/testing';

import { FormControServiceService } from './form-contro-service.service';

describe('FormControServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormControServiceService = TestBed.get(FormControServiceService);
    expect(service).toBeTruthy();
  });
});
