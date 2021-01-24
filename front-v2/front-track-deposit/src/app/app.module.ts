import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { TrackListComponent } from './track-list/track-list.component';
import { AddUpdateTrackComponent } from './add-update-track/add-update-track.component';
import { UpdateTrackComponent } from './update-track/update-track.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LyricSearchExtApiComponent } from './lyric-search-ext-api/lyric-search-ext-api.component';


@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    AddUpdateTrackComponent,
    UpdateTrackComponent,
    LyricSearchExtApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
