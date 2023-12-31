import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvinComponent } from './marvin/marvin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilesComponent } from './profiles/profiles.component';
import {LayoutModule} from '@angular/cdk/layout';
import { TimelineComponent } from './timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MarvinComponent,
    ProfilesComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
