import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BreakpointService } from '../../services';
import { MasterDetailComponent } from './master-detail.component';


describe('LibMasterDetailComponent', () => {
  let component: MasterDetailComponent;
  let fixture: ComponentFixture<MasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailComponent ],
      providers: [
        BreakpointService
      ],
      imports: [
        RouterModule.forRoot([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
