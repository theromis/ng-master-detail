import {
  Attribute, Directive, ElementRef, Input,
  HostListener, Renderer2 } from '@angular/core';
import {
  ActivatedRoute, Router,
  RouterLink, UrlTree } from '@angular/router';
import { BreakpointService } from '../services';

@Directive({selector: ':not(a):not(area)[libMasterRouterLink]'})
export class MasterRouterLinkDirective extends RouterLink {

  /* -------------------------------------------- */
  /* NOTE: This directive is pretty simple, the   */
  /*       important bit here just swaps out the  */
  /*       'relativeTo' option, depending on the  */
  /*       current screen size.                   */
  /* -------------------------------------------- */

  private myCommands: any[] = [];

  @Input()
  set libMasterRouterLink(myCommands: any[]|string) {
    if (myCommands != null) {
      this.myCommands = Array.isArray(myCommands) ? myCommands : [myCommands];
    } else {
      this.myCommands = [];
    }
  }

  constructor(
      private breakpointService: BreakpointService,
      private myRouter: Router,
      private myRoute: ActivatedRoute,
      @Attribute('tabindex') tabIndex: string,
      renderer: Renderer2, el: ElementRef) {
    super(myRouter, myRoute, tabIndex, renderer, el);
  }

  @HostListener('click')
  onClick(): boolean {

    // NOTE: Change 'relativeTo' depending on the current screen size...
    const myRoute = this.breakpointService.isDesktop ? this.myRoute : this.myRoute.parent;
    this.myRouter.navigate(this.myCommands, { relativeTo: myRoute });
    return true;

  }

}
