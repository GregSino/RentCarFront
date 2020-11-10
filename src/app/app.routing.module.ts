import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { CarCreateComponent } from './car/car-create/car-create.component';
import { CarUpdateComponent } from './car/car-update/car-update.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { RentCreateComponent } from './rent/rent-create/rent-create.component';
import { RentUpdateComponent } from './rent/rent-update/rent-update.component';
import { RentListComponent } from './rent/rent-list/rent-list.component';
import { RentDetailsComponent } from './rent/rent-details/rent-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'drivers', pathMatch: 'full'},
  {path: 'drivers', component: DriverListComponent},
  {path: 'adddriver', component: DriverCreateComponent},
  {path: 'updatedriver/:id', component: DriverUpdateComponent},
  {path: 'driverdetails/:id', component: DriverDetailsComponent},
  {path: 'cars', component: CarListComponent},
  {path: 'addcar', component: CarCreateComponent},
  {path: 'updatecar/:id', component: CarUpdateComponent},
  {path: 'cardetails/:id', component: CarDetailsComponent},
  {path: 'rents', component: RentListComponent},
  {path: 'addrent', component: RentCreateComponent},
  {path: 'updaterent/:id', component: RentUpdateComponent},
  {path: 'rentdetails/:id', component: RentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
