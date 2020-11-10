import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  @Output() majListCars = new EventEmitter();
  car: Car = new Car();

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
      this.carService
        .createCar(this.car).subscribe(data => {
          console.log(data);
          this.car = new Car();
          this.majListCars.emit();
        },
        error => console.log(error));

  }

  onSubmit(): void {
    this.save();
  }

}
