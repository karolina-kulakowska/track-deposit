import { AddUpdateTrackComponent } from './add-update-track/add-update-track.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'tracks/addTrack', component: AddUpdateTrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
