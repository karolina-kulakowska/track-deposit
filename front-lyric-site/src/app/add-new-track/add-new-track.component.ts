import { TrackServiceService } from './../services/track-service.service';
import { Track } from './../model/track.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-new-track',
  templateUrl: './add-new-track.component.html',
  styleUrls: ['./add-new-track.component.css']
})
export class AddNewTrackComponent implements OnInit {


  track: Track;


  constructor(private trackService: TrackServiceService) { }

  ngOnInit(): void {
  }

  public addTrack(): void{
    this.trackService.addTrack(this.track).subscribe(answer => {
      console.log('answer: ', answer);
      this.track = answer;
    });
  }

}
