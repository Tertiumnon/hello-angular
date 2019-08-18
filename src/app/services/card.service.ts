import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Image } from '../shared/image';
import { Card } from '../shared/card';

import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  images: Array<Image>;
  private cards: Array<Card>;
  size: number;
  count: number;
  activeI: number;

  private cardsSource = new BehaviorSubject<Card[]>(this.cards);
  currentCards = this.cardsSource.asObservable();

  /**
   * Construct
   * @param dataService Data service
   * @param imageService Image service
   */
  constructor(
    private dataService: DataService,
    private imageService: ImageService
  ) {
    this.dataService.currentSize.subscribe(size => this.size = size);
    this.dataService.currentCount.subscribe(count => this.count = count);
    this.cards = new Array<Card>();
  }

  changeCards(cards: Array<Card>) {
    this.cardsSource.next(cards);
  }

  /**
   * Get cards from images and change it's props
   */
  initCards(count: number) {
    this.imageService.getNewImages(count).subscribe((newImages: Image[]) => {
      this.cards = newImages.map(image => {
        return {
          id: image.id,
          src: image.urls.thumb,
          opacity: 1
        };
      });
      this.activeI = 0;
      this.setOpacity();
      this.dataService.changeMargin(10);
      this.dataService.changeWidth(this.cards.length * (this.size + 10));
      this.changeCards(this.cards);
    });
  }

  /**
   * Get cards container width
   */
  getActualWidth() {
    return this.cards.length * (this.size + 10);
  }

  /**
   * Set active card
   * @param i Index to calc
   */
  setActiveI(i: number) {
    this.activeI += i;
    this.setOpacity();
  }

  /**
   * Set cards opacity
   */
  setOpacity() {
    let opacity = 1.2;
    this.cards.forEach((card, i) => {
      if (i >= this.activeI) {
        opacity -= 0.2;
        card.opacity = opacity;
      }
    });
  }

  /**
   * Get new card
   */
  addCard() {
    this.imageService.getNewImages(1).subscribe((newImages: Image[]) => {
      const newCards: Card[] = newImages.map(image => {
        return {
          id: image.id,
          src: image.urls.thumb,
          opacity: 1
        };
      });
      this.cards.unshift(newCards[0]);
      this.activeI = 0;
      this.setOpacity();
      this.dataService.changeMargin(10);
      this.dataService.changeWidth(this.cards.length * (this.size + 10));
    });
  }

  /**
   * Get cards
   */
  getCards() {
    return this.cards;
  }

  /**
   * Get cards real count
   */
  getCardsCount() {
    return this.cards ? this.cards.length : this.count;
  }
}
