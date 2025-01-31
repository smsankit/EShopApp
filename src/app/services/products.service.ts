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
    const procust_url = 'https://fakestoreapi.com/products';
    //const procust_url =  'http://4.224.109.85:8080/Products1';
    // const procust_url = 'https://productapiwithapim-f6fbghgudmbnffh9.centralindia-01.azurewebsites.net/Products1';
    // return this.http.get<Product>(`${environment.productApiUrl}/${this.productUrl}`);
    return this.http.get<Product>(`${procust_url}`);
  }
}
