import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rating',
  templateUrl: 'rating.component.html',
  styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})
export class RatingComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('rating-value') rating = 0;
  @Input() numOfReviews = 0;

  onClick(ratingValue) {
    this.rating = ratingValue;
  }
}
