import { Router } from '@angular/router';
import { Track } from './../model/track.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrackService } from '../service/track.service';

@Component({
  selector: 'app-add-update-track',
  templateUrl: './add-update-track.component.html',
  styleUrls: ['./add-update-track.component.css']
})
export class AddUpdateTrackComponent implements OnInit {

  trackForm: FormGroup;
  track: Track;

  constructor(
    private fb: FormBuilder,
    private trackService: TrackService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.trackForm = this.fb.group({
      artist: '',
      title: ''
    });
  }

  onSubmit(): void{
    console.log(this.trackForm);
  }

  saveTrack(track: Track): void {
    this.trackService.createTrack(track).subscribe(
      answer => {
        console.log(`saveTrack answer: `, answer);
        this.track = answer;
        this.goBackFromCreate();
      }
    );
  }

  goBackFromCreate() {
    this.router.navigate(['']);
  }
}
