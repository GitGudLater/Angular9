import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss']
})
export class CatalogComponent{

  public products$:Observable<Product[]> = this.catalogService.getProducts().pipe(map(dto => dto  as Product[]));

  constructor( private catalogService: CatalogService) {}

  addProductToBusket(product: Product) {
    this.catalogService.addProductToBucket(product);
  }

  calculatePrice(product: Product): number {
    return this.catalogService.calculatePriceForProduct(product);
  }

}


