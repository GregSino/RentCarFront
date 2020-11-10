import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Car} from '../car';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  @Output() majListCars = new EventEmitter();
  id: number;
  car: Car;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) {
  }

  ngOnInit(): void {
    this.car = new Car();
    this.id = this.route.snapshot.params.id;

    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data);
        this.car = data;
      }, error => console.log(error));
  }

  updateCar(): void {
    this.carService.updateCar(this.id, this.car)
      .subscribe(data => {
        console.log(data);
        this.car = new Car();
        this.majListCars.emit();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateCar();
  }

  gotoList(): void {
    this.router.navigate(['/cars']);

  }
}

