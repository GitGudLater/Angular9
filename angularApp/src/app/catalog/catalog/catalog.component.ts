import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Product } from '../models/product';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  //public currentProduct:Product;
  public products$:Observable<Product[]> = this.catalogService.getProducts().pipe(map(dto => dto  as Product[]));

  constructor( private catalogService: CatalogService) {}

  ngOnInit(): void {
  }

  getProducts() {

  }

  updateProduct() {

  }

  deleteProduct() {

  }

  addProduct() {

  }

}


