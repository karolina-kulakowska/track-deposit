import { Track } from './../model/track.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackServiceService {

  private mainUrl = 'http://localhost:8090/api/tracks';

  constructor(private httpClient: HttpClient) { }

  getAllTracks(): Observable<Track[]> {
    return this.httpClient.get<Track[]>('${this.mainUrl}');
  }

  addTrack(track: Track): Observable<Track> {
    return this.httpClient.post<Track>('${this.mainUrl}' + '/addTrack', track);
  }
}
