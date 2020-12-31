import { AddUpdateTrackComponent } from './add-update-track/add-update-track.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrackListComponent } from './track-list/track-list.component';
import { UpdateTrackComponent } from './update-track/update-track.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'tracks/addTrack', component: AddUpdateTrackComponent },
  { path: 'tracks', component: TrackListComponent },
  { path: 'tracks/edit/:id', component: UpdateTrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
