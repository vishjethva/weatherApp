import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityListingPage } from './city-listing.page';

const routes: Routes = [
  {
    path: '',
    component: CityListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityListingPageRoutingModule {}
