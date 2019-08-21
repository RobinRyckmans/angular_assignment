import {Component, Input, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {SongSearchResult} from '../../model/SongSearchResult';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private song: SongSearchResult;
  private allowed: boolean;

  constructor(private router: Router, private songService: SongService) {
  }

  ngOnInit() {
    this.allowed = this.songService.getAllowed();
    if (!this.allowed) {
      this.router.navigate(['']);
    } else {
      this.song = this.songService.getActiveSong();
    }
  }

  resetAllowed() {
    this.songService.setAllowed(false);
  }
}
