import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {SongSearchResult} from '../../model/SongSearchResult';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {SongSearchResults} from '../../model/SongSearchResults';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {
  songs: SongSearchResults;
  searchResult: string;

  constructor(private songService: SongService) {
    console.log('ngOnInit: SearchMusic');
  }

  ngOnInit() {
    // To instantiate the searchResult so the initial label gets shown
    this.searchResult = '';
  }

  searchSongs() {
    this.songService.setAllowed(true);
    this.songService.searchSongs(this.searchResult).subscribe(data => this.songs = data);
  }

  setActiveSong(song: SongSearchResult) {
    this.songService.setActiveSong(song);
  }
}
