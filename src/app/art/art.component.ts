import { Component } from '@angular/core';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css',
})
export class ArtComponent {}

export function popularity(rating: number): string {
  let msg = 'Invalid Rating';
  if (rating > 4) {
    msg = 'Very Popular';
  } else if (rating > 3 && rating <= 4) {
    msg = 'Popular';
  } else if (rating > 2 && rating <= 3) {
    msg = 'Average';
  } else if (rating > 1 && rating <= 2) {
    msg = 'Not so Popular';
  } else if (rating > 0 && rating <= 1) {
    msg = 'Awful';
  }
  return msg;
}

export function experience(rating: number): string {
  let msg = 'Invalid Rating';
  if (rating >= 5) {
    msg = 'Masterpiece';
  } else if (rating >= 4) {
    msg = 'Excellent';
  } else if (rating >= 3) {
    msg = 'Good';
  } else if (rating >= 2) {
    msg = 'Average';
  } else if (rating >= 1) {
    msg = 'Poor';
  } 
  return msg;
}