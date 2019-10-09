import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service'

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {

  constructor(private weatherSvc: WeatherServiceService){
    this.cityList=this.weatherSvc.getCityList();
  }

  cityList: string[]

  ngOnInit() {
    
  }

}


// ngOnChanges