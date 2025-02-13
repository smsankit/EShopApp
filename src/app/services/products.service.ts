import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from './../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl = 'products';
  

  constructor(private http: HttpClient) {
    console.log('ProductsService instantiated');
  }

  public getProducts(): Observable<Product> {
    // const product_url = 'https://fakestoreapi.com/products';
    const product_url =  'http://amcart-api.centralindia.cloudapp.azure.com/products1';
   
    // return this.http.get<Product>(`${environment.productApiUrl}/${this.productUrl}`);
    return this.http.get<Product>(`${product_url}`);
  }
}
