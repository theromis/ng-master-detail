import { MasterRouterLinkDirective } from './master-router-link.directive';
import { ActivatedRoute } from '@angular/router';

describe('MasterRouterLinkDirective', () => {

  let bpSpy;
  let routerSpy;
  let routeSpy;
  let rendererSpy;
  let directive;


  beforeEach(() => {
    bpSpy = jasmine.createSpyObj('BreakpointService', ['isDesktop']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routeSpy = jasmine.createSpyObj('ActivateRoute', ['parent']);
    rendererSpy = jasmine.createSpyObj('Renderer2', ['dsds']);
    directive = new MasterRouterLinkDirective(bpSpy, routerSpy, routeSpy, '0', rendererSpy, null);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('when clicked', () => {

    it('should create use the correct command to route', () => {
      const myCommand = ['test-route'];
      directive.libMasterRouterLink = myCommand;
      directive.onClick();
      expect(routerSpy.navigate).toHaveBeenCalledWith(myCommand, { relativeTo: routeSpy });
    });

    it('should navigate relative to the current route when on desktop', () => {
      bpSpy.isDesktop = true;
      directive.onClick();
      expect(routerSpy.navigate).toHaveBeenCalledWith([], { relativeTo: routeSpy });
    });

    it('should navigate relative to the parent route when on mobile', () => {
      bpSpy.isDesktop = false;
      directive.onClick();
      expect(routerSpy.navigate).toHaveBeenCalledWith([], { relativeTo: routeSpy.parent });
    });

  });

});
