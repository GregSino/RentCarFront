import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
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
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DriverCreateComponent,
    DriverDetailsComponent,
    DriverListComponent,
    DriverUpdateComponent,
    CarCreateComponent,
    CarUpdateComponent,
    CarListComponent,
    CarDetailsComponent,
    RentCreateComponent,
    RentUpdateComponent,
    RentListComponent,
    RentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
