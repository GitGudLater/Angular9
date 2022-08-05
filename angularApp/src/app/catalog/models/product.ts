import { SKU } from "./sku";

export interface Product{
    //установить для своойств инициализатор
    ID:string;
    TYPE:string;
    DESIGNER:string;
    SKU?:Object;// object map
    PRICE:number;
    PICTURE:string;
}