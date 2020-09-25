import { TrackServiceService } from './../services/track-service.service';
import { Track } from './../model/track.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent implements OnInit {

  tracks: Observable<Track[]>;

  constructor(private trackService: TrackServiceService) { }

  ngOnInit(): void {
  }

  getAllTracksList(): Observable<Track[]>{
    return this.tracks = this.trackService.getAllTracks();
  }

}
