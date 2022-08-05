import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Product } from '../models/product';
import { SKU } from '../models/sku';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  //public currentProduct:Product;
  public products$:Observable<Product[]> = this.catalogService.getProducts().pipe(map(data => data as Product[]));

  constructor( private catalogService: CatalogService) {}

  ngOnInit(): void {
  }

  getProducts() {
    //при наличии проблемы приведения типов обзервера и списка продуктов
    //this.catalogService.getProducts().subscribe((data) => {console.log(data)/*this.products = data.products*/});
    //console.log(this.products);
  }

  updateProduct() {

  }

  deleteProduct() {

  }

  addProduct() {

  }

}


