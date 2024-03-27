import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { MusicComponent } from './music/music.component';
import { ArtComponent } from './art/art.component';
import { IndexComponent } from './index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SportsComponent,
    MusicComponent,
    ArtComponent,
    IndexComponent,
    RouterLink
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp';
}
