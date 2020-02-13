import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rating',
  template: `
  <i
  class="glyphicon"
  [class.glyphicon-star-empty]="rating < 1"
  [class.glyphicon-star]="rating >= 1"
  (click)="onClick(1)">
  </i>
  `
})
export class RatingComponent {
  rating = 0;

  onClick(ratingValue) {
    this.rating = ratingValue;
  }
}
