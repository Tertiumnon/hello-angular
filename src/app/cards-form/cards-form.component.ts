import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent {
  size: number;
  radius: number;
  count: number;
  margin: number;
  cardsCount: number;

  constructor(
    private dataService: DataService,
    private cardService: CardService
  ) {
    this.dataService.currentSize.subscribe(size => this.size = size);
    this.dataService.currentRadius.subscribe(radius => this.radius = radius);
    this.dataService.currentCount.subscribe(count => this.count = count);
    this.dataService.currentMargin.subscribe(margin => this.margin = margin);
  }

  /**
   * On size change
   * @param e Size
   */
  onSizeChange(e: string) {
    this.dataService.changeSize(Number(e));
    this.dataService.changeMargin(10);
    this.dataService.changeWidth(this.cardService.getActualWidth());
  }

  /**
   * On radius change
   * @param e Radius
   */
  onRadiusChange(e: string) {
    this.dataService.changeRadius(Number(e));
  }

  /**
   * Add square (card)
   */
  addSquare() {
    this.cardService.addCard();
  }

  /**
   * Get step size for slider scroll - prev
   */
  getPrevStepSize() {
    return this.margin + (this.size + 10);
  }

  /**
   * Get step size for slider scroll - next
   */
  getNextStepSize() {
    return this.margin - (this.size + 10);
  }

  /**
   * Is prev card exists
   */
  isPrevExists() {
    return this.margin !== 10;
  }

  /**
   * Is next card exists
   */
  isNextExists() {
    return ((this.cardService.getCardsCount() - 1) * (this.size + 10) + this.margin - 10) !== 0;
  }

  /**
   * Click on "Prev"
   */
  onPrev() {
    if (this.isPrevExists()) {
      this.dataService.changeMargin(this.getPrevStepSize());
      this.cardService.setActiveI(-1);
    }
  }

  /**
   * Click on "Next"
   */
  onNext() {
    if (this.isNextExists()) {
      this.dataService.changeMargin(this.getNextStepSize());
      this.cardService.setActiveI(1);
    }
  }

}
