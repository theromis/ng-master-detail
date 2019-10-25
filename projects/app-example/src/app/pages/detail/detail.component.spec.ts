import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ParamMap, ActivatedRoute, convertToParamMap } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { LibMasterDetailModule } from '@lib/master-detail';
import { DetailComponent } from './detail.component';
import { HeaderComponent } from '../../components';
import { charactersReducer } from '../../state/character.reducer';

describe('<app-detail/> Page', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let routeSubject$: Subject<ParamMap>;
  let routeChangeSub$: Subscription;

  beforeEach(async(() => {
    routeSubject$ = new Subject<ParamMap>();
    TestBed.configureTestingModule({
      declarations: [
        DetailComponent,
        HeaderComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
              paramMap: routeSubject$.asObservable()
          }
        }
      ],
      imports: [
        LibMasterDetailModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({ characters: charactersReducer }),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    routeChangeSub$ = new Subscription();
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Smoke Test', () => {

    it('Component should be created', () => {
      expect(component).toBeTruthy();
    });

  });

  describe('When Initialising', () => {

    it('should subscribe to all route changes', () => {
      const params1 = convertToParamMap({ id: 1 });
      const params2 = convertToParamMap({ id: 2 });
      component.getRouteParams = jasmine.createSpy('getRouteParams');
      component.ngOnInit();
      routeSubject$.next(params1);
      expect(component.getRouteParams).toHaveBeenCalledWith(params1);
      routeSubject$.next(params2);
      expect(component.getRouteParams).toHaveBeenCalledWith(params2);
    });

  });

  describe('When destroying the component', () => {

    it('should unsubscribe from any subscriptions', () => {
      component.ngOnInit();
      spyOn(routeChangeSub$, 'unsubscribe').and.callThrough();
      component.routeChangeSub$ = routeChangeSub$;
      component.ngOnDestroy();
      expect(routeChangeSub$.unsubscribe).toHaveBeenCalled();
    });

  });

  describe('When inspecting the route params', () => {

    it('does not update the store if an id param is not present', () => {
      const args = {};
      component.getRouteParams(convertToParamMap(args));
      spyOn(component.store, 'pipe').and.callThrough();
      expect(component.store.pipe).not.toHaveBeenCalled();
    });

    it('returns nothing if no id params is present', () => {
      expect(component.getRouteParams(convertToParamMap({})))
        .toBeNull();
    });

    it('updates the store if the id param is present', () => {
      const args = { id: 5 };
      component.getRouteParams(convertToParamMap(args));
      spyOn(component.store, 'pipe').and.callThrough();
      expect(component.store.pipe).not
        .toHaveBeenCalledWith(jasmine.any(Object), args);
    });

    it('returns the correct id is an id param is present', () => {
      expect(component.getRouteParams(convertToParamMap({ id: 2 })))
        .toEqual(2);
    });

  });

});
