import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreakpointService } from '../../services';
import { MasterDetailComponent } from './master-detail.component';
import { Component } from '@angular/compiler/src/core';



describe('LibMasterDetailComponent', () => {
  let component: MasterDetailComponent;
  let fixture: ComponentFixture<MasterDetailComponent>;
  const bpSpy = jasmine.createSpyObj('BreakpointService', ['isDesktop']);
  const bpStub = { isDesktop: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailComponent ],
      providers: [
        { provide: BreakpointService, useValue: bpStub }
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

  describe('when on desktop devices', () => {

    it('the detail view should be displayed inline' , () => {
      component.breakpoints.isDesktop = true;
      fixture.detectChanges();
      const componentDe: DebugElement = fixture.debugElement;
      const componentEl = componentDe.nativeElement;
      const detailEl = componentEl.querySelector('.__detail');
      expect(detailEl).not.toBeNull();
    });

  });

  describe('when on mobile devices', () => {
    it('the detail view should be hidden' , () => {
      fixture.detectChanges();
      const componentDe: DebugElement = fixture.debugElement;
      const componentEl = componentDe.nativeElement;
      const detailEl = componentEl.querySelector('.__detail');
      expect(detailEl).toBeNull();
    });

  });


});
