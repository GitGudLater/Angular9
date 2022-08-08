import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { BucketProduct } from 'src/app/models/busket-product';
import { BucketService } from 'src/app/services/bucket/bucket.service';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

@Component({
  selector: 'app-busket',
  templateUrl: './bucket.html',
  styleUrls: ['./bucket.scss']
})
export class BucketComponent implements OnInit {
  public products: Map<string, BucketProduct> = new Map();

  public resultPrice: number = 0;

  constructor(public catalogService:CatalogService, public busketService: BucketService) { }

  ngOnInit(): void {
    this.catalogService.currentProductToBucket.subscribe(product => {
      if ( product.ID != 'initial')  
        this.products.has(product.ID)? 
          this.products.set(product.ID, this.busketService.addExistedProductToBucket(this.products.get(product.ID) as BucketProduct)) :
          this.products.set(product.ID, this.busketService.addNewProductToBucket(product));
        this.calculateFullBucketPrice()

    });
  }

  deleteFromBusket(product: BucketProduct) {
    (product.QUANTITY as number) > 1 ? 
      this.products.set(product.ID, {...product, QUANTITY: --(product.QUANTITY as number)}) : 
      this.products.delete(product.ID);
  }

  addToBusket(product: BucketProduct) {
    this.products.set(product.ID, {...product, QUANTITY: ++(product.QUANTITY as number)})
  }

  calculateMultipleProductPrice(product: BucketProduct) {
    return this.busketService.calculateMultipleProductPrice(product);
  }
  
  @HostListener('click')
  calculateFullBucketPrice() {
    this.resultPrice = this.busketService.calculateFullBucketPrice(this.products);
  }

}
