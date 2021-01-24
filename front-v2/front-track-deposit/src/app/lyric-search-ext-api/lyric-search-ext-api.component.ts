import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Track } from '../model/track.model';
import { TrackService } from '../service/track.service';

@Component({
  selector: 'app-lyric-search-ext-api',
  templateUrl: './lyric-search-ext-api.component.html',
  styleUrls: ['./lyric-search-ext-api.component.css']
})
export class LyricSearchExtApiComponent implements OnInit {

  track: Track = {
    id: undefined,
    artist: undefined,
    title: undefined,
    lyrics: undefined
  };

  trackForm: FormGroup;
  buttonClicked = false;

  constructor(
    private trackService: TrackService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.trackForm = this.fb.group({
      artist: '',
      title: '',
      lyrics: '',
    });
  }

  findLyrics(artist: string, title: string): void {
    this.trackService.findLyricsFromExternalApi(artist, title).subscribe(
      answer => {console.log(`answer: `, answer)
      this.track = answer;
    });
  }

  clicked(){
    this.buttonClicked = !this.buttonClicked;
  }

}
