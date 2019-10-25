import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemComponent } from './list-item.component';

describe('<app-list-item/> Component', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Smoke Test', () => {

    it('Component should be created', () => {
      expect(component).toBeTruthy();
    });

  });

  describe('When data is passed into the componet', () => {

    const getText = (testFixture: ComponentFixture<ListItemComponent>, testId: string) => {
      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement;
      return element.querySelector(`[data-test=${testId}]`)
        .textContent
        .trim();
    };

    it('The "Title" is displayed correctly', () => {
      const testTitle = 'Test Title';
      component.title = testTitle;
      expect(getText(fixture, 'list-item__title'))
        .toEqual(testTitle);
    });

    it('The "Subtitle" is displayed correctly', () => {
      const testSubtitle = 'Test Subtitle';
      component.subtitle = testSubtitle;
      expect(getText(fixture, 'list-item__subtitle'))
        .toEqual(testSubtitle);
    });

    it('The "Description" is displayed correctly', () => {
      const testDescription = 'Test Description';
      component.description = testDescription;
      expect(getText(fixture, 'list-item__description'))
        .toEqual(testDescription);
    });

  });

});
