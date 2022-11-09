import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './service/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public cityList = [
    { url: '/city/' + "Rio de Janeiro", id: "Rio de Janeiro" },
    { url: '/city/' + "Beijing", id: "Beijing" },
    { url: '/city/' + "Los Angeles", id: "Los Angeles" }
  ];

  activeCityName: string;
  lastUpdatedDate: Date;
  searchValue: string = '';
  showSearchBox: boolean = false;
  title: string = 'Weather App';

  constructor(public httpService: WeatherService, private router: Router) {
    this.lastUpdatedDate = new Date();
    this.activeCityName = this.cityList[0]?.id;
    this.router.navigate(['/city/' + this.cityList[0]?.id])
  }

  ngOnInit() {
    this.activeCityName = this.cityList[0]?.id;
    this.httpService.getTabCall.emit(this.cityList[0]?.id);
  }

  handleRefresh(event: any) {
    if (this.activeCityName == undefined && this.activeCityName == '') {
      this.activeCityName = this.cityList[0]?.id;
      this.httpService.getTabCall.emit(this.activeCityName)
    } else {
      this.httpService.getTabCall.emit(this.activeCityName)
    }
  }

  handleSetHideShowSearchBox() {
    this.showSearchBox = this.showSearchBox ? false : true;
    this.searchValue = '';
    this.handleRefresh(null);
  }

  handleSetActiveCityTab(cityName) {
    this.activeCityName = cityName;
  }

  handleSearchChange(event: any) {
    if (event?.detail?.value) {
      this.searchValue = event?.detail?.value;
      setTimeout(() => {
        this.httpService.getTabCall.emit(this.activeCityName);
      }, 0);
      this.router.navigate(['/city/' + this.searchValue])
    }
  }
}
