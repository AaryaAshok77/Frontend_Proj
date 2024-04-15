import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsComponent, sportsTeamRanking, athletePerformanceScore } from './sports.component';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('sportsTeamRanking', () => {
  it('Rank 3 returns Elite', () => {
    expect(sportsTeamRanking(3)).toBe('Elite');
  });

  it('Rank 8 returns Playoff Contender', () => {
    expect(sportsTeamRanking(8)).toBe('Playoff Contender');
  });

  it('Rank 15 returns Solid Team', () => {
    expect(sportsTeamRanking(15)).toBe('Solid Team');
  });

  it('Rank 25 returns Average', () => {
    expect(sportsTeamRanking(25)).toBe('Average');
  });

  it('Rank 40 returns Struggling', () => {
    expect(sportsTeamRanking(40)).toBe('Struggling');
  });

  it('Rank -5 returns Invalid Score', () => {
    expect(sportsTeamRanking(-5)).toBe('Invalid Score');
  });
});

describe('athletePerformanceScore', () => {
  it('Score 95 returns World Class', () => {
    expect(athletePerformanceScore(95)).toBe('World Class');
  });

  it('Score 85 returns Elite', () => {
    expect(athletePerformanceScore(85)).toBe('Elite');
  });

  it('Score 75 returns Excellent', () => {
    expect(athletePerformanceScore(75)).toBe('Excellent');
  });

  it('Score 65 returns Good', () => {
    expect(athletePerformanceScore(65)).toBe('Good');
  });

  it('Score 55 returns Average', () => {
    expect(athletePerformanceScore(55)).toBe('Average');
  });

  it('Score 25 returns Needs Improvement', () => {
    expect(athletePerformanceScore(25)).toBe('Needs Improvement');
  });

  it('Score -5 returns Invalid Score', () => {
    expect(athletePerformanceScore(-5)).toBe('Invalid Score');
  });
});
