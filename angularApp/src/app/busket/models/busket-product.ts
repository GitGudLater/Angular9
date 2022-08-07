import { Product } from "src/app/catalog/models/product";

export interface BucketProduct {
    quantity: number;
    product: Product;
}