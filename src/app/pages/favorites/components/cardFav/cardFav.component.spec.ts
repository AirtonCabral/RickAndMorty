import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFavComponent } from './cardFav.component';

describe('CardComponent', () => {
  let component: CardFavComponent;
  let fixture: ComponentFixture<CardFavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFavComponent]
    });
    fixture = TestBed.createComponent(CardFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
