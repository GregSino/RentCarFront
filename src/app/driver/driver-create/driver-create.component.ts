import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Driver} from '../driver';
import {DriverService} from '../driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {
  @Output() majListDrivers = new EventEmitter();
  driver: Driver = new Driver();

  constructor(private driverService: DriverService, private router: Router) {  }

  ngOnInit(): void { }

  save(): void {
    this.driverService
      .createDriver(this.driver).subscribe(data => {
        console.log(data);
        this.driver = new Driver();
        this.majListDrivers.emit();
      },
      error => console.log(error));
  }

  onSubmit(): void {
    this.save();
  }

}
