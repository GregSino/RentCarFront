import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Driver} from '../driver';
import {ActivatedRoute, Router} from '@angular/router';
import {DriverService} from '../driver.service';

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {
  @Output() majListDrivers = new EventEmitter();
  id: number;
  driver: Driver;

  constructor(private route: ActivatedRoute, private router: Router, private driverService: DriverService) {
  }

  ngOnInit(): void {
    this.driver = new Driver();

    this.id = this.route.snapshot.params.id;

    this.driverService.getDriver(this.id)
      .subscribe(data => {
        console.log(data);
        this.driver = data;
      }, error => console.log(error));
  }

  updateDriver(): void {
    this.driverService.updateDriver(this.id, this.driver)
      .subscribe(data => {
        console.log(data);
        this.driver = new Driver();
        this.majListDrivers.emit();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateDriver();
  }

  gotoList(): void {
    this.router.navigate(['/drivers']);

  }
}

