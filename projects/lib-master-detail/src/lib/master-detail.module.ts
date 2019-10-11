import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MasterDetailComponent } from './components';
import { MasterDetailRouterLinkDirective } from './directives';
import { BreakpointService } from './services';

@NgModule({
  declarations: [
    MasterDetailComponent,
    MasterDetailRouterLinkDirective
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule
  ],
  exports: [
    MasterDetailComponent
  ],
  providers: [
    BreakpointService
  ]
})
export class LibMasterDetailModule { }
