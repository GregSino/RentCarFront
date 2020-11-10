import { Component, OnInit } from '@angular/core';
import {Rent} from '../rent';
import {ActivatedRoute, Router} from '@angular/router';
import {RentService} from '../rent.service';

@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent implements OnInit {
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

  rentUpdate(): void {
    this.rentService.rentUpdate(this.id, this.rent)
      .subscribe(data => {
        console.log(data);
        this.rent = new Rent();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.rentUpdate();
  }

  gotoList(): void {
    this.router.navigate(['/rents']);

  }
}

