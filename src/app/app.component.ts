import { Component } from '@angular/core';
import { ProductService } from './product.service';

import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'app-root',
  template:
   `<h1>{{title}}</h1>
   <img src="{{imageUrl}}"/>
   <h2>{{subtitle}}</h2>
  <products></products>
  <advertisements></advertisements>
  <button class="btn btn-primary">Submit</button>
  `,
  providers: [ProductService, AdvertisementService]
})


export class AppComponent {
  title = 'My First Angular App!'; subtitle = 'My Second Angular App!'; imageUrl = "https://www.w3schools.com/html/pic_mountain.jpg";
}

