import {Component, OnInit} from '@angular/core';
import {Driver} from '../driver';
import {Observable} from 'rxjs';
import {DriverService} from '../driver.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  driver: Driver;

  drivers: Observable<Driver[]>;

  constructor(private driverService: DriverService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.drivers = this.driverService.getDriversList();
  }

  deleteDriver(id: number): void {
    this.driverService.deleteDriver(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  driverDetails(id: number): void {
    this.router.navigate(['driverdetails', id]);
  }

  updateDriver(id: number, value: any): void {

    this.router.navigate(['updatedriver', id]);

  }
}

