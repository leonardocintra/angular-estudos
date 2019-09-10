import { TestBed } from '@angular/core/testing';

import { GenRandonDataService } from './gen-randon-data.service';

describe('GenRandonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenRandonDataService = TestBed.get(GenRandonDataService);
    expect(service).toBeTruthy();
  });
});
