import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent, MasterComponent } from './pages';
import { HeaderComponent, ListItemComponent } from './components';
import { StoreModule } from '@ngrx/store';
import { LibMasterDetailModule } from '@lib/master-detail';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { charactersReducer } from './state/character.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MasterComponent,
    HeaderComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LibMasterDetailModule,
    StoreModule.forRoot({ characters: charactersReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
