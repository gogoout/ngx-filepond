import { TestBed } from '@angular/core/testing';

import { FilePondService } from './filepond.service';

describe('FilePondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilepondService = TestBed.get(FilepondService);
    expect(service).toBeTruthy();
  });
});
