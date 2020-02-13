import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';

import { AdvertisementsComponent } from './advertisements.component';


@NgModule({
  declarations: [
    AppComponent, ProductsComponent, AdvertisementsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
