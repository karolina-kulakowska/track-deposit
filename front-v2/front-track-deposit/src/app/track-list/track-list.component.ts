import { TrackService } from './../service/track.service';
import { Component, OnInit } from '@angular/core';
import { Track } from './../model/track.model';
import { faFileAudio, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks: Track[];

  icons = {
    plusIcon: faPlusCircle,
    trashIcon: faTrashAlt,
    fileAudioIcon: faFileAudio,
  };

  constructor(
    private trackService: TrackService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }


  goToAddTrack(): void {
    this.router.navigate(['/tracks/addTrack']);
  }


  getAllTracks(): void {
    this.trackService.getAllTracks().subscribe(answer => {
      console.log(`answer: `, answer);
      this.tracks = answer;
    });
  }

  deleteTrack(track: Track): void {
    this.trackService.deleteTrackById(track.id).subscribe(
      answer => {
        console.log(`Delete answer: `, answer);
        this.tracks = this.tracks.filter(tr => tr.id !== answer.id);
      }
    );
  }

}
