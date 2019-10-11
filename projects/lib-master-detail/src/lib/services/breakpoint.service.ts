import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable()
export class BreakpointService {

    public isDesktop = true;

    constructor(public breakpointObserver: BreakpointObserver) {
      // NOTE: Use the Breakpoint Observer to switch observe
      //       mobile/desktop changes...
      this.breakpointObserver
        .observe(['(min-width: 768px)'])
        .subscribe((state: BreakpointState) => {
          this.isDesktop = state.matches;
        });
    }

}
