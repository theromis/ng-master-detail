import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from '../../components';
import { MasterComponent } from './master.component';
import { LibMasterDetailModule } from '@lib/master-detail';
import { charactersFeatureKey, charactersReducer } from '../../state/character.reducer';

describe('MasterComponent', () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MasterComponent
      ],
      imports: [
        LibMasterDetailModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({ [charactersFeatureKey]: charactersReducer }),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
