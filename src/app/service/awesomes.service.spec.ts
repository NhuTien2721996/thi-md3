import { TestBed } from '@angular/core/testing';

import { AwesomesService } from './awesomes.service';

describe('AwesomesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwesomesService = TestBed.get(AwesomesService);
    expect(service).toBeTruthy();
  });
});
