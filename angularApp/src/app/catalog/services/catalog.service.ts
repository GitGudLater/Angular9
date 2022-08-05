import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogService{
    constructor (private httpClient: HttpClient) {

    }

    getProducts() {
        return this.httpClient.get('assets/materials/files/jsons/products.json');
    }

    createProduct(){

    }

    updateProduct(){

    }

    deleteProduct(){

    }
}