import { TrackService } from './../service/track.service';
import { Component, OnInit } from '@angular/core';
import { Track } from './../model/track.model';
import { faEdit, faFileAudio, faPlusCircle, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})

export class TrackListComponent implements OnInit {

  tracks: Track[];
  closeResult: string;

  icons = {
    plusIcon: faPlusCircle,
    trashIcon: faTrashAlt,
    fileAudioIcon: faFileAudio,
    editIcon: faEdit,
    searchIcon: faSearch,
  };

  constructor(
    private trackService: TrackService,
    private router: Router,
    private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
  }


  goToAddTrack(): void {
    this.router.navigate(['/tracks/addTrack']);
  }

  goToEditTrack(): void {
    this.router.navigate(['/tracks/edit']);
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
    this.router.navigate(['/tracks']);
  }

  editTrack(track: Track): void {
    console.log('clicked on edit track: ', track.artist + ' ' + track.title);
    console.log('track id: ', track.id);
    this.router.navigate(['/tracks/edit', track.id]);
  }


  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  
}
