import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from '../model/product';
import {catchError} from 'rxjs/operators';

const BASE_URL = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    return this.http.get(`${BASE_URL}/manage`);
  }

  read(productName: string): Observable<any> {
    return this.http.get(`${BASE_URL}/${productName}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${BASE_URL}/manage/add`, data);
  }

  update(data: any, productName: string): Observable<any> {
    return this.http.put(`${BASE_URL}/manage/${productName}`, data);
  }

  delete(productName: string): Observable<any> {
    return this.http.delete(`${BASE_URL}/manage/${productName}`);
  }

  searchByCriteria(age: string, income: string, student: boolean): Observable<any> {
    return this.http.get(`${BASE_URL}/products/search?age=${age}&income=${income}&student=${student}`);
  }
}
