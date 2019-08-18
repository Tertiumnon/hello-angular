import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  // size
  private sizeSource = new BehaviorSubject(120);
  currentSize = this.sizeSource.asObservable();
  // radius
  private radiusSource = new BehaviorSubject(10);
  currentRadius = this.radiusSource.asObservable();
  // count
  private countSource = new BehaviorSubject(5);
  currentCount = this.countSource.asObservable();
  // width
  private widthSource = new BehaviorSubject(0);
  currentWidth = this.widthSource.asObservable();
  // margin
  private marginSource = new BehaviorSubject(10);
  currentMargin = this.marginSource.asObservable();

  constructor() { }

  changeSize(size: number) {
    this.sizeSource.next(size);
  }

  changeRadius(radius: number) {
    this.radiusSource.next(radius);
  }

  changeCount(count: number) {
    this.countSource.next(count);
  }

  changeWidth(width: number) {
    this.widthSource.next(width);
  }

  changeMargin(margin: number) {
    this.marginSource.next(margin);
  }

}
