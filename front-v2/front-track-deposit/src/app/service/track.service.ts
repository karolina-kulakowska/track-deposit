import { Track } from './../model/track.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackService {


  private mainUrl = 'http://localhost:8090/api/tracks';

  constructor(private httpClient: HttpClient) { }

  getAllTracks(): Observable<Track[]> {
    return this.httpClient.get<Track[]>(`${this.mainUrl}`);
  }

  deleteTrackById(id: string): Observable<Track> {
    console.log(`[TrackService] in deleteTrackById(${id})`);
    return this.httpClient.delete<Track>(`${this.mainUrl}/${id}`);
  }

  createTrack(track: Track): Observable<Track> {
    console.log('[TrackService] in createTrack', track);
    return this.httpClient.post<Track>(`${this.mainUrl}/addTrack`, track);
  }
}
