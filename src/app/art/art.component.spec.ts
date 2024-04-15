import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtComponent, popularity, experience } from './art.component';

describe('ArtComponent', () => {
  let component: ArtComponent;
  let fixture: ComponentFixture<ArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('popularity', () =>{
  it('Rating 4.2 returns Very Popular', () =>{
    expect(popularity(4.2)).toBe('Very Popular');
  })
  it('Rating 3.8 returns Popular', () => {
    expect(popularity(3.8)).toBe('Popular');
  });

  it('Rating 2.5 returns Average', () => {
    expect(popularity(2.5)).toBe('Average');
  });

  it('Rating 1.0 returns Not Popular', () => {
    expect(popularity(1.0)).toBe('Not Popular');
  });

  it('Rating 0.5 returns Unknown', () => {
    expect(popularity(0.5)).toBe('Awful');
  });

  it('Rating -1 returns Invalid', () => {
    expect(popularity(-1)).toBe('Invalid Rating');
  });
})

describe('experience', () => {
  it('Rating 5.0 returns Masterpiece', () => {
    expect(experience(5.0)).toBe('Masterpiece');
  });

  it('Rating 4.5 returns Excellent', () => {
    expect(experience(4.5)).toBe('Excellent');
  });

  it('Rating 3.0 returns Good', () => {
    expect(experience(3.0)).toBe('Good');
  });

  it('Rating 2.0 returns Average', () => {
    expect(experience(2.0)).toBe('Average');
  });

  it('Rating 1.0 returns Poor', () => {
    expect(experience(1.0)).toBe('Poor');
  });

  it('Rating -1 returns Invalid Rating', () => {
    expect(experience(-1)).toBe('Invalid Rating');
  });
});