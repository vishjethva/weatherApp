import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  host: string;
  accessKey: string;
  getTabCall: EventEmitter<any> = new EventEmitter();

  constructor(public _http: HttpClient) {
    this.host = environment.httpUrl;
    this.accessKey = environment.accessKey;
  }

  async getWeatherByCity(city: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http
        .get(
          this.host +
            'forecast?q=' +
            city +
            '&appid=' +
            this.accessKey +
            '&cnt=4&units=metric'
        )
        .subscribe(
          (resp) => {
            resolve(resp);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
