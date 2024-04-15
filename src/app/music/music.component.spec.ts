import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicComponent } from './music.component';

describe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('musicEventTicketPrice', () => {
  it('General event regular ticket should be $50', () => {
    expect(musicEventTicketPrice('regular', 'general')).toBe(50);
  });

  it('General event VIP ticket should be $100', () => {
    expect(musicEventTicketPrice('vip', 'general')).toBe(100);
  });

  it('Premium event regular ticket should be $75', () => {
    expect(musicEventTicketPrice('regular', 'premium')).toBe(75);
  });

  it('Premium event VIP ticket should be $150', () => {
    expect(musicEventTicketPrice('vip', 'premium')).toBe(150);
  });

  it('Invalid ticket type should return -1', () => {
    expect(musicEventTicketPrice('invalid', 'general')).toBe(-1);
  });

  it('Invalid event type should return -1', () => {
    expect(musicEventTicketPrice('regular', 'invalid')).toBe(-1);
  });
});

describe('musicEventCapacity', () => {
  it('General event with capacity 500 should be Small Venue', () => {
    expect(musicEventCapacity('general', 500)).toBe('Small Venue');
  });

  it('General event with capacity 3000 should be Medium Venue', () => {
    expect(musicEventCapacity('general', 3000)).toBe('Medium Venue');
  });

  it('General event with capacity 10000 should be Large Venue', () => {
    expect(musicEventCapacity('general', 10000)).toBe('Large Venue');
  });

  it('Premium event with capacity 300 should be Intimate Venue', () => {
    expect(musicEventCapacity('premium', 300)).toBe('Intimate Venue');
  });

  it('Premium event with capacity 1500 should be Upscale Venue', () => {
    expect(musicEventCapacity('premium', 1500)).toBe('Upscale Venue');
  });

  it('Premium event with capacity 3000 should be High-End Venue', () => {
    expect(musicEventCapacity('premium', 3000)).toBe('High-End Venue');
  });

  it('Invalid event type should return Invalid Event Type', () => {
    expect(musicEventCapacity('invalid', 1000)).toBe('Invalid Event Type');
  });
});