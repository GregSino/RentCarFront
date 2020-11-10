import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8080/rent-car/api/v1/cars';

  constructor(private  http: HttpClient) {
  }

  getCar(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCar(car: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, car);
  }

  updateCar(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCarsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMinCarsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/min`);
  }

}
