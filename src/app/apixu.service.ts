import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private httpclient:HttpClient) { }

  getweather(location){
    return this.httpclient.get(
      'http://api.weatherstack.com/current?access_key=bde00684f0dce767b4df61b9b2f7fa39&units=m&query=' + location
    );
  }
}
