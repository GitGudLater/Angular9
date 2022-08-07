import { SKU } from "./sku";

export interface Product{
    //установить для своойств инициализатор
    ID:string;
    NAME:string;
    SORT:string;
    COLOR_CODE:string;
    COLOR_SAMPLE:string;
    COVER_SIDE:string;
    WIDTH:string;
    STOCK:string;
    TYPE:string;
    DESIGNER:string;
    SKU?:{ [key: string]: SKU };// object map
    PRICE?:number;
    PICTURE:string;
}