import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { BehaviorSubject} from 'rxjs';

@Injectable()
export class CatalogService{
    private productToBucket = new BehaviorSubject<Product>({ ID: "initial"} as Product);
    currentProductToBucket = this.productToBucket.asObservable();

    constructor (private httpClient: HttpClient) {}

    addProductToBucket(product: Product) {
        this.productToBucket == undefined ? this.productToBucket = new BehaviorSubject<Product>(product) : this.productToBucket.next(product);
    }
    getProducts() {
        return this.httpClient.get('assets/materials/files/jsons/products.json');
    }
}