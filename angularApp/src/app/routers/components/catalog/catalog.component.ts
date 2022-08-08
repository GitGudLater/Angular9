import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { SKU } from 'src/app/models/sku';
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
    this.catalogService.addProductToBucket(this.catalogService.convertProductToBucket(product));
  }

  addCustomProductToBucket(sku: SKU) {
    this.catalogService.addProductToBucket(this.catalogService.convertCustomProductToBucket(sku));
  }

  calculatePrice(product: Product): number {
    return this.catalogService.calculatePriceForProduct(product);
  }

  transformSkuColl(skuColl: {[key:string]:SKU} | undefined): SKU[] {
    return this.catalogService.transfromSkusToCollection(skuColl as {[key:string]:SKU});
  }

}


