import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/catalog/models/product";
import { BucketProduct } from "../models/busket-product";

@Injectable()
export class BusketService{


    constructor () {}

    addExistedProductToBucket(currentBucketProduct: BucketProduct): BucketProduct {
        return {...currentBucketProduct, quantity: ++currentBucketProduct.quantity };
    }

    addNewProductToBucket(newProduct: Product): BucketProduct {
        return { product: newProduct, quantity:1}
    }

    calculateMultipleProductPrice(product: BucketProduct) {
        return this.calculatePriceForProduct(product) * product.quantity;
      }
    
    calculatePriceForProduct(product: BucketProduct) {
        return product.product.PRICE ? product.product.PRICE : this.calculateSkuPrice(product);
    }
    
    calculateSkuPrice(product: BucketProduct) {
        let sum = 0;
        for( let subProductKey in product.product.SKU) {
          sum += Number(product.product.SKU[subProductKey].PRICE);
        }
        return sum;
    }

    calculateFullBucketPrice(products: Map<string, BucketProduct>) {
        let sum = 0;
        for( let product of products.values())
            sum += this.calculateMultipleProductPrice(product);
        return sum;
    }
}