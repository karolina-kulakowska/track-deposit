import { AddNewTrackComponent } from './add-new-track/add-new-track.component';
import { TracksListComponent } from './tracks-list/tracks-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'tracks', component: TracksListComponent },
  { path: 'add-new-track', component: AddNewTrackComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
