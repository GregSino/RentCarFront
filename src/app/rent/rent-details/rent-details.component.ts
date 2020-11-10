import { Component, OnInit } from '@angular/core';
import {Rent} from '../rent';
import {ActivatedRoute, Router} from '@angular/router';
import {RentService} from '../rent.service';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit {
  id: number;
  rent: Rent;

  constructor(private route: ActivatedRoute, private router: Router, private rentService: RentService) {
  }

  ngOnInit(): void {
    this.rent = new Rent();

    this.id = this.route.snapshot.params.id;

    this.rentService.getRent(this.id)
      .subscribe(data => {
        console.log(data);
        this.rent = data;
      }, error => console.log(error));
  }

  list(): void {
    this.router.navigate(['/rents']);
  }
}
