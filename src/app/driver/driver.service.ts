import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private baseUrl = 'http://localhost:8080/rent-car/api/v1/drivers';

  constructor(private  http: HttpClient) {
  }

  getDriver(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDriver(driver: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, driver);
  }

  updateDriver(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getDriversList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
