import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {SongSearchResult} from '../model/SongSearchResult';
import {HttpClient} from '@angular/common/http';
import {SongSearchResults} from '../model/SongSearchResults';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private baseUrl = 'https://itunes.apple.com/search';
  private activeSong: SongSearchResult = undefined;
  private allowed = false;

  constructor(private http: HttpClient) { }

  searchSongs(filter: string): Observable<SongSearchResults> {
    const fullUrl = `${this.baseUrl}?term=${filter}&media=music&limit=20`;

    return this.http.jsonp<SongSearchResults>(fullUrl, 'callback');

  }

  getActiveSong(): SongSearchResult {
    return this.activeSong;
  }

  setActiveSong(song: SongSearchResult) {
    this.activeSong = song;
  }

  /*
  Move these two functions to its own service
   */
  getAllowed(): boolean {
    return this.allowed;
  }

  setAllowed(allowed: boolean) {
    this.allowed = allowed;
  }
}
