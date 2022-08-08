import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { BehaviorSubject} from 'rxjs';
import { SKU } from 'src/app/models/sku';
import { BucketProduct } from 'src/app/models/busket-product';

@Injectable()
export class CatalogService{
    private productToBucket = new BehaviorSubject<BucketProduct>({ ID: "initial"} as BucketProduct);
    currentProductToBucket = this.productToBucket.asObservable();

    constructor (private httpClient: HttpClient) {}

    addProductToBucket(product: BucketProduct) {
        this.productToBucket == undefined ? this.productToBucket = new BehaviorSubject<BucketProduct>(product) : this.productToBucket.next(product);
    }

    convertProductToBucket(product: Product): BucketProduct {
        return { ID: product.ID, NAME: product.NAME, PRICE: product.PRICE } as BucketProduct;
    }

    convertCustomProductToBucket(sku: SKU): BucketProduct {
        return { ID: sku.ID, NAME: sku.NAME, PRICE: Number(sku.PRICE)} as BucketProduct;
    }
    
    getProducts() {
        return this.httpClient.get('assets/materials/files/jsons/products.json');
    }
    
    calculatePriceForProduct(product: Product) {
        return product.PRICE ? product.PRICE : this.calculateSkuPrice(product);
    }

    calculateSkuPrice(product: Product) {
        let sum = 0;
        for( let subProductKey in product.SKU) {
          sum += Number(product.SKU[subProductKey].PRICE);
        }
        return sum;
    }

    transfromSkusToCollection(skuColl: {[key: string]: SKU}) {
        let skuReturnColl: SKU[] = [];
        for(let key in skuColl) {
            skuReturnColl.push(skuColl[key]);
        }
        return skuReturnColl;
    }
}