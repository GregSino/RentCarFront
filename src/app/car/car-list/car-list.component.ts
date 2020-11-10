import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../car';
import {CarService} from '../car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Observable<Car[]>;

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.cars = this.carService.getCarsList();
  }

  deleteCar(id: number): void {
      this.carService.deleteCar(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
  }

  carDetails(id: number): void {
    this.router.navigate(['cardetails', id]);
  }

  updateCar(id: number, value: any): void {
    this.router.navigate(['updatecar', id]);

  }

}
