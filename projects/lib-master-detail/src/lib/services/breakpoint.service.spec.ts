import { TestBed } from '@angular/core/testing';
import { Observable, from  } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointService } from './breakpoint.service';

describe('BreakpointService', () => {

  const matchObj = [ { matchStr: '(min-width: 768px)', result: false }];
  const bpSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);
  const fakeObserve = (s: string[]): Observable<BreakpointState> => from(matchObj)
    .pipe(
        filter(match => match.matchStr === s[0]),
        map(match => {
          return { matches: match.result, breakpoints: {} } as BreakpointState;
        })
    );
  bpSpy.observe.and.callFake(fakeObserve);


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BreakpointService,
      { provide: BreakpointObserver, useValue: bpSpy }
    ]
  }));

  it('should be created', () => {
    const service: BreakpointService = TestBed.get(BreakpointService);
    expect(service).toBeTruthy();
  });

  describe('When the device size changes', () => {
    function resize(width: number): void {
      matchObj[0].result = (width >= 768) ? true : false;
    }

    it('is should correcltly identity mobile screen sizes', () => {
        resize(767);
        const service: BreakpointService = TestBed.get(BreakpointService);
        expect(service.isDesktop).toBeFalsy();
    });

    it('it should correctly identify desktop screen sizes', async () => {
        resize(769);
        const service: BreakpointService = TestBed.get(BreakpointService);
        expect(service.isDesktop).toBeTruthy();
    });

  });
});
