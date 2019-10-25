import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LibMasterDetailModule, BreakpointService } from '@lib/master-detail';

describe('<app-header/> Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let breakpointServiceStub: BreakpointService;

  beforeEach(async(() => {
    breakpointServiceStub = {
      isDesktop: false,
      breakpointObserver: null
    };
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: BreakpointService,
          useValue: breakpointServiceStub
        }
      ],
      imports: [
        LibMasterDetailModule,
        RouterModule.forRoot([])
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Smoke Test', () => {

    it('Component should be created', () => {
      expect(component).toBeTruthy();
    });

  });

  describe('Title is set correctly', () => {

    const getTitle = (testFixture: ComponentFixture<HeaderComponent>) => {
      testFixture.detectChanges();
      const element: HTMLElement = testFixture.nativeElement;
      return element.querySelector(`[data-test='headerTitle']`).textContent.trim();
    };

    it('When no title is set, the appropriate message is displayed', () => {
      const testTitle = '';
      component.title = testTitle;
      expect(getTitle(fixture)).toEqual(component.defaultTitle);
    });

    it('When a title is set, it is displayed', () => {
      const testTitle = 'Test Title';
      component.title = testTitle;
      expect(getTitle(fixture)).toEqual(testTitle);
    });

  });

  describe('The back button', () => {

    const getBack = (testFixture: ComponentFixture<HeaderComponent>) => {
      testFixture.detectChanges();
      return fixture.nativeElement.querySelector(`[data-test="backButton"]`);
    };

    it('Should never be visible on desktop', () => {
      component.showBack = true;
      component.breakpointService.isDesktop = true;

      let elem: HTMLElement = getBack(fixture);
      expect(elem.style.visibility).toBe('hidden');

      component.showBack = true;
      elem = getBack(fixture);
      expect(elem.style.visibility).toBe('hidden');
    });

    it('Should only be visible on desktop when specifically turned on', () => {
      component.showBack = false;
      component.breakpointService.isDesktop = false;
      let elem: HTMLElement = getBack(fixture);
      expect(elem.style.visibility).toBe('hidden');

      component.showBack = true;
      elem = getBack(fixture);
      expect(elem.style.visibility).toBe('visible');
    });

  });

});
