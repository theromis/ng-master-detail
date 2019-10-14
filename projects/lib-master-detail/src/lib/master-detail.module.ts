import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MasterDetailComponent } from './components';
import { MasterRouterLinkDirective } from './directives';
import { BreakpointService } from './services';
import { MartTesetDirective } from './directives/mart-teset.directive';

const components = [ MasterDetailComponent ];
const directives = [ MasterRouterLinkDirective ];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    MartTesetDirective
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
