import { Product } from "src/app/models/product";

export interface BucketProduct {
    quantity: number;
    product: Product;
}