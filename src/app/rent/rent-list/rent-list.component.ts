import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Rent} from '../rent';
import {RentService} from '../rent.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  rents: Observable<Rent[]>;

  constructor(private rentService: RentService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.rents = this.rentService.getRentsList();
  }

  rentDelete(id: number): void {
    this.rentService.deleteRent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  rentDetails(id: number): void {
    this.router.navigate(['rentdetails', id]);
  }

  rentUpdate(id: number, value: any): void {
    this.router.navigate(['rentupdate', id]);

  }
}

