import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent, MasterComponent } from './pages';
import { HeaderComponent, ListItemComponent } from './components';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { LibMasterDetailModule } from '@lib/master-detail';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  import { entityConfig, CharacterService, CharacterDataService } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { charactersFeatureKey, charactersReducer } from './state/character.reducer';

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
    StoreModule.forRoot({ [charactersFeatureKey]: charactersReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    // CharacterService,
    // CharacterDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
