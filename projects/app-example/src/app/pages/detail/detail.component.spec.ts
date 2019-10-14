import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LibMasterDetailModule } from '@lib/master-detail';
import { DetailComponent } from './detail.component';
import { HeaderComponent } from '../../components';
import { charactersFeatureKey, charactersReducer } from '../../state/character.reducer';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LibMasterDetailModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({ [charactersFeatureKey]: charactersReducer }),
      ],
      declarations: [
        DetailComponent,
        HeaderComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
