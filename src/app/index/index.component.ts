import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  
}

export function getMusicGenres(): string[] {
  return ['Rock', 'Jazz', 'Electronic', 'Pop', 'Hip-Hop'];
}

export function getMusicEventCategories(): string[] {
  return ['Festivals', 'Concerts', 'Live Sessions', 'DJ Sets', 'Acoustic Performances'];
}

export function getTheatrePerformanceTypes(): string[] {
  return ['Drama', 'Comedy', 'Musical', 'Ballet', 'Opera'];
}

export function getTheatreVenueTypes(): string[] {
  return ['Broadway', 'Off-Broadway', 'Regional', 'Community', 'Outdoor'];
}

export function getSportsLeagues(): string[] {
  return ['NBA', 'NFL', 'MLB', 'NHL', 'Premier League'];
}

export function getSportsEventTypes(): string[] {
  return ['Championship', 'Tournament', 'Match', 'Game', 'Exhibition'];
}