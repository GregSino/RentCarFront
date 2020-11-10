import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  private baseUrl = 'http://localhost:8080/rent-car/api/v1/rents';

  constructor(private http: HttpClient) {
  }

  getRent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRent(rent: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, rent);
  }

  rentUpdate(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getRentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
