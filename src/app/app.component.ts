import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'app-root',
  template:
   `<h1>{{title}}</h1>
   <img src="{{imageUrl}}"/>
   <h2>{{subtitle}}</h2>
  <rating></rating>
  <products></products>
  <advertisements></advertisements>
  <div>
  <button (click)="onClickMe($event)" class="btn btn-primary btn-lg"
  [class.disabled]="!isValid">Submit</button>
  </div>
  <p></p>
  <div>
  <button (click)="onClickMe($event)" class="btn btn-danger"
  [class.disabled]="!isValid">Danger</button>
  </div>
  `,
  providers: [ProductService, AdvertisementService]
})

export class AppComponent {
  // tslint:disable-next-line: max-line-length
  title = 'My First Angular App!';
  subtitle = 'My Second Angular App!';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  isValid = true;
  onClickMe($event) {console.log('Watch out!', $event);
  }
}

