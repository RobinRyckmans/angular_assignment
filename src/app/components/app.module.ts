import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { SearchMusicComponent } from './search-music/search-music.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  { path: ':id', component: DetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchMusicComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
