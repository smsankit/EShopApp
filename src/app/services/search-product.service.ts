import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from './../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {

  productSearchUrl = 'products/search';

  constructor(private http: HttpClient) {
    console.log('SearchProductsService instantiated');
  }

  public searchProducts(searchTerm:any): Observable<Product> {
    return this.http.get<Product>(`${environment.productApiUrl}/${this.productSearchUrl}?searchterm=${searchTerm}`);
  }
}