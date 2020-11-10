import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Rent} from '../rent';
import {Observable} from 'rxjs';
import {Car} from '../../car/car';
import {Driver} from '../../driver/driver';
import {RentService} from '../rent.service';
import {CarService} from '../../car/car.service';
import {Router} from '@angular/router';
import {DriverService} from '../../driver/driver.service';

@Component({
  selector: 'app-rent-create',
  templateUrl: './rent-create.component.html',
  styleUrls: ['./rent-create.component.css']
})
export class RentCreateComponent implements OnInit {
  @Output() majListEmprunts = new EventEmitter();
  rent: Rent = new Rent();
  cars: Observable<Car[]>;
  drivers: Observable<Driver[]>;
  driver: Driver;
  car: Car;

  constructor(private rentService: RentService, private carService: CarService,
              private driverService: DriverService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.cars = this.carService.getCarsList();
    this.drivers = this.driverService.getDriversList();
  }

  save(): void {
    this.rent.driver = this.driver; // donner valeur conducteur au conducteur de l'emprunt
    this.rent.car = this.car; // idem conducteur pour vehicule
    this.rentService.createRent(this.rent)
      .subscribe(data => {
          console.log(data);
          this.rent = new Rent();
          this.majListEmprunts.emit();
        },
        error => console.log(error));
  }

  onSubmit(): void {
    this.save();
  }

  gotolist(): void {
    this.router.navigate(['/rents']);
  }

}

