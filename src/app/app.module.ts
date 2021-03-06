import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { AdvertisementsComponent } from './advertisements.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SalesComponent } from './sales.component';
import { ProductComponent } from './product.component';
import { TruncatePipe } from './truncate.pipe';
import { JumboTronComponent } from './jumbotron.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, AdvertisementsComponent,
    RatingComponent, SalesComponent,
    ProductComponent, TruncatePipe,
    JumboTronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
