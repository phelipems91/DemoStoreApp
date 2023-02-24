import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://localhost:7157/api';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc', category = 'All'): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}&category=${category}`
    )
  }

  getAllCategories(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/categories`
    );
  }

  getCategory(id: number): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/categories/${id}`
    );
  }
}
