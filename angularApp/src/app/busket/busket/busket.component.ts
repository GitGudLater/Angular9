import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/catalog/services/catalog.service';
import { BucketProduct } from '../models/busket-product';
import { BusketService } from '../services/busket.service';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.scss']
})
export class BusketComponent implements OnInit {
  public products: Map<string, BucketProduct> = new Map();

  constructor(public catalogService:CatalogService, public busketService: BusketService) { }

  ngOnInit(): void {
    this.catalogService.currentProductToBucket.subscribe(product => 
      this.products.has(product.ID)? 
        this.products.set(product.ID, this.busketService.addExistedProductToBucket(this.products.get(product.ID) as BucketProduct)) :
        this.products.set(product.ID, this.busketService.addNewProductToBucket(product))
    );
  }

  deleteFromBusket(product: BucketProduct) {
    console.log(product);
    product.quantity > 1 ? 
      this.products.set(product.product.ID, {...product, quantity: --product.quantity}) : 
      this.products.delete(product.product.ID);
  }

}
