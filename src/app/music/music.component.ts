import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

}

export function musicEventTicketPrice(ticketType: string, eventType: string): number {
  let price = 0;
  if (eventType === 'general') {
    if (ticketType === 'regular') {
      price = 50;
    } else if (ticketType === 'vip') {
      price = 100;
    } else {
      return -1;
    }
  } else if (eventType === 'premium') {
    if (ticketType === 'regular') {
      price = 75;
    } else if (ticketType === 'vip') {
      price = 150;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
  return price;
}

export function musicEventCapacity(eventType: string, capacity: number): string {
  let msg = '';
  if (eventType === 'general') {
    if (capacity <= 1000) {
      msg = 'Small Venue';
    } else if (capacity <= 5000) {
      msg = 'Medium Venue';
    } else {
      msg = 'Large Venue';
    }
  } else if (eventType === 'premium') {
    if (capacity <= 500) {
      msg = 'Intimate Venue';
    } else if (capacity <= 2000) {
      msg = 'Upscale Venue';
    } else {
      msg = 'High-End Venue';
    }
  } else {
    msg = 'Invalid Event Type';
  }
  return msg;
}