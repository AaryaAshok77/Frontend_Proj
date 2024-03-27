import { Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { SportsComponent } from './sports/sports.component';
import { ArtComponent } from './art/art.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    { path: 'music', component: MusicComponent },
    { path: 'sports', component: SportsComponent },
    { path: 'art', component: ArtComponent },
    { path: '', component: IndexComponent }

];
