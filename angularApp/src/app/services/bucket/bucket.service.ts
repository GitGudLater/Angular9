import { Injectable } from "@angular/core";
import { Product } from "src/app/models/product";
import { BucketProduct } from "../../models/busket-product";

@Injectable()
export class BucketService{

    constructor () {}

    addExistedProductToBucket(currentBucketProduct: BucketProduct): BucketProduct {
        return {...currentBucketProduct, QUANTITY: ++(currentBucketProduct.QUANTITY as number) };
    }

    addNewProductToBucket(newProduct: BucketProduct): BucketProduct {
        return { ...newProduct, QUANTITY:1}
    }

    calculateMultipleProductPrice(product: BucketProduct): number {
        return product.PRICE * (product.QUANTITY as number);
    }

    calculateFullBucketPrice(products: Map<string, BucketProduct>) {
        let sum = 0;
        for( let product of products.values())
            sum += this.calculateMultipleProductPrice(product);
        return sum;
    }
}