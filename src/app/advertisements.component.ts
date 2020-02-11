import { Component } from '@angular/core';
import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'advertisements',
  template: `<h2>Advertisements</h2>
  <ul>
  <li *ngFor="let advertisement of advertisements">
{{advertisement}}
</li>
</ul>
  `
})

export class AdvertisementsComponent {
  advertisements;

    constructor(advertisementService: AdvertisementService) {
      this.advertisements = advertisementService.getAdvertisement();
    }
}
