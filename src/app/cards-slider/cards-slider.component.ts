import { Component } from '@angular/core';
// shared
import { Card } from '../shared/card';
// services
import { CardService } from '../services/card.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cards-slider',
  templateUrl: './cards-slider.component.html',
  styleUrls: ['./cards-slider.component.scss']
})
export class CardsSliderComponent {
  size: number;
  radius: number;
  count: number;
  width: number;
  margin: number;
  cards: Array<Card>;

  constructor(
    private cardService: CardService,
    private dataService: DataService
  ) {
    this.dataService.currentSize.subscribe(size => this.size = size);
    this.dataService.currentRadius.subscribe(radius => this.radius = radius);
    this.dataService.currentCount.subscribe(count => this.count = count);
    this.dataService.currentWidth.subscribe(width => this.width = width);
    this.dataService.currentMargin.subscribe(margin => this.margin = margin);
    this.cardService.initCards(this.count);
    this.cardService.currentCards.subscribe((cards) => {
      this.cards = cards;
    });
  }
}
