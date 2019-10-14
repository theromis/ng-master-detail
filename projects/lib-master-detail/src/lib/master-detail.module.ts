import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MasterDetailComponent } from './components';
import { MasterRouterLinkDirective } from './directives';
import { BreakpointService } from './services';

const components = [ MasterDetailComponent ];
const directives = [ MasterRouterLinkDirective ];

@NgModule({
  declarations: [
    ...components,
    ...directives
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot([])
  ],
  exports: [
    ...components,
    ...directives
  ],
  providers: [
    BreakpointService
  ]
})
export class LibMasterDetailModule { }
