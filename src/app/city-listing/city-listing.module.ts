import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityListingPageRoutingModule } from './city-listing-routing.module';

import { CityListingPage } from './city-listing.page';
import { WeatherService } from '../service/weather.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityListingPageRoutingModule
  ],
  providers:[WeatherService],
  declarations: [CityListingPage]
})
export class CityListingPageModule {}
