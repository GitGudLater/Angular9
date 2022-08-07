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
}