import { Component } from '@angular/core';
import { SaleService } from './sale.service';

@Component({
  selector: 'sales',
  template: `<h2>Sales</h2>
  <ul>
  <li *ngFor="let sale of sales">
{{sale}}
</li>
</ul>
  `
})

export class SalesComponent {
  sales: any;

    constructor(saleService: SaleService) {
      this.sales = saleService.getSale();
    }
}
