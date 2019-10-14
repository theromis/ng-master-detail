import { TestBed } from '@angular/core/testing';

import { BreakpointService } from './breakpoint.service';

describe('BreakpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BreakpointService
    ]
  }));

  it('should be created', () => {
    const service: BreakpointService = TestBed.get(BreakpointService);
    expect(service).toBeTruthy();
  });
});
