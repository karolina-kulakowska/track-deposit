import { Track } from './model/track.model';
import { Component } from '@angular/core';
import { TrackServiceService } from './services/track-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-lyric-site';

  // tracks: Track[];
  // constructor(private trackService: TrackServiceService) { }

  // getAllTracksList(): void{
  //   this.trackService.getAllTracks().subscribe(answer => {
  //     console.log('answer: ', answer);
  //     this.tracks = answer;
  //   });
  // }
}
