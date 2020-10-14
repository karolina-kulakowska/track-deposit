import { TrackService } from './../service/track.service';
import { Component, OnInit } from '@angular/core';
import { Track } from './../model/track.model';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks: Track[];

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
  }

  getAllTracks(): void {
    this.trackService.getAllTracks().subscribe(aswer => {
      console.log(`answer: `, aswer);
      this.tracks = aswer;
    });
  }

}
