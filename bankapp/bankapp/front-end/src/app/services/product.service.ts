import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/products';
const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any>{
    return this.httpClient.get(baseUrl, {'headers': headers});
  }

  read(): Observable<any>{
    return this.httpClient.get(`${baseUrl}/${productName}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`api/products/manage/add`, data);
  }

  update(productName: string, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/manage/${productName}`, data);
  }

  delete(productName: string): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/manage/${productName}`);
  }

  searchByCriteria(ageBracket: string, incomeBracket: string, student: boolean): Observable<any> {
    return this.httpClient.get(`${baseURL}/search?ageBracket=${ageBracket}&incomeBracket=${incomeBracket}&student=${student}`,
      {'headers': headers});
  }

}
