import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-city-listing',
  templateUrl: './city-listing.page.html',
  styleUrls: ['./city-listing.page.scss'],
})
export class CityListingPage implements OnInit {
  public routeCityNm: string;
  weatherList: Array<object> = [];
  constructor(private activatedRoute: ActivatedRoute, public httpService: WeatherService) {
    this.httpService.getTabCall.subscribe((city: string) => {
      this.getWetherList(city)
    });
  }

  ngOnInit() {
    this.routeCityNm = this.activatedRoute.snapshot.paramMap.get('id');
    this.getWetherList(this.routeCityNm);
  }

  getWetherList(city: string) {
    if (city)
    this.weatherList = [];
      this.httpService.getWeatherByCity(this.routeCityNm).then((resp) => {
        this.weatherList = resp.list;
      });
  }
}
