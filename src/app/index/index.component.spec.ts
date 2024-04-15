import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Music Functions', () => {
  it('getMusicGenres should return the expected music genres', () => {
    const genres = getMusicGenres();
    expect(genres).toEqual(['Rock', 'Jazz', 'Electronic', 'Pop', 'Hip-Hop']);
  });

  it('getMusicEventCategories should return the expected music event categories', () => {
    const categories = getMusicEventCategories();
    expect(categories).toEqual(['Festivals', 'Concerts', 'Live Sessions', 'DJ Sets', 'Acoustic Performances']);
  });
});

describe('Theatre Functions', () => {
  it('getTheatrePerformanceTypes should return the expected theatre performance types', () => {
    const performanceTypes = getTheatrePerformanceTypes();
    expect(performanceTypes).toEqual(['Drama', 'Comedy', 'Musical', 'Ballet', 'Opera']);
  });

  it('getTheatreVenueTypes should return the expected theatre venue types', () => {
    const venueTypes = getTheatreVenueTypes();
    expect(venueTypes).toEqual(['Broadway', 'Off-Broadway', 'Regional', 'Community', 'Outdoor']);
  });
});

describe('Sports Functions', () => {
  it('getSportsLeagues should return the expected sports leagues', () => {
    const leagues = getSportsLeagues();
    expect(leagues).toEqual(['NBA', 'NFL', 'MLB', 'NHL', 'Premier League']);
  });

  it('getSportsEventTypes should return the expected sports event types', () => {
    const eventTypes = getSportsEventTypes();
    expect(eventTypes).toEqual(['Championship', 'Tournament', 'Match', 'Game', 'Exhibition']);
  });
});