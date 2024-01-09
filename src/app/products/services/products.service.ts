import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface Category {
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsServices {

  constructor(private http:HttpClient) {   }
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
  }
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiUrl}/products/categories`)
  }
  getProductByCategory(category:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/products/category/${category}`)
  }
}
