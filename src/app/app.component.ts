import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { AdvertisementService } from './advertisement.service';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-root',
  template: `
  <bs-jumbotron>
  <div class="heading">
  Hello World!
  </div>
  <div class="body">
  This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</div><div class="button">
  Learn more</div></bs-jumbotron>
  <div class="container">
   <h1>{{title}}</h1>
   <img src="{{imageUrl}}"/>
   <h2>{{subtitle}}</h2>
  <products></products>
  <advertisements></advertisements>
  <sales></sales>
  <div>
  <button (click)="onClickMe($event)" class="btn btn-primary btn-lg"
  [class.disabled]="!isValid">Submit</button>
  </div>
  <p></p>
  <div>
  <button (click)="onClickMe($event)" class="btn btn-danger"
  [class.disabled]="!isValid">Danger</button>
  <br><br>
  </div>
  </div>
  `,
  providers: [ProductService, AdvertisementService, SaleService]
})

export class AppComponent {
   //tslint:disable-next-line: max-line-length
  title = 'My First Angular App!';
  subtitle = 'My Second Angular App!';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  isValid = true;
  onClickMe($event) {console.log('Clicked', $event);
  }
}

