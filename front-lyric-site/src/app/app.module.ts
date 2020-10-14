import { TrackServiceService } from './services/track-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TracksListComponent } from './tracks-list/tracks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AddNewTrackComponent } from './add-new-track/add-new-track.component';






@NgModule({
  declarations: [
    AppComponent,
    TracksListComponent,
    AddNewTrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [TrackServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
