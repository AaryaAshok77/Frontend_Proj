import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {

}

export function sportsTeamRanking(rank: number): string {
  let msg = '';
  if (rank <= 5) {
    msg = 'Elite';
  } else if (rank <= 10) {
    msg = 'Playoff Contender';
  } else if (rank <= 20) {
    msg = 'Solid Team';
  } else if (rank <= 30) {
    msg = 'Average';
  } else if (rank <= 50){
    msg = 'Struggling';
  } else if (rank <= 0){
    msg = 'Invalid Score';
  }
  return msg
}

export function athletePerformanceScore(score: number): string {
  let msg = '';
  if (score >= 90) {
    msg = 'World Class';
  } else if (score >= 80) {
    msg = 'Elite';
  } else if (score >= 70) {
    msg = 'Excellent';
  } else if (score >= 60) {
    msg = 'Good';
  } else if (score >= 50) {
    msg = 'Average';
  } else if (score >= 30){
    msg = 'Needs Improvement';
  } else if (score < 0){
    msg = 'Invalid Score';
  }
  return msg
}