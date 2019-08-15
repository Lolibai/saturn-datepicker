import { TestBed } from '@angular/core/testing';

import { SaturnDatepickerDoubleService } from './saturn-datepicker-double.service';

describe('SaturnDatepickerDoubleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaturnDatepickerDoubleService = TestBed.get(SaturnDatepickerDoubleService);
    expect(service).toBeTruthy();
  });
});
