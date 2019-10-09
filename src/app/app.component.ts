import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service'
import { Weather } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day06workshop';

  constructor(private weatherSvc: WeatherServiceService){}

  ngOnInit() {
    // this.weatherSvc.getWeather(this.city)
    //   .then((result) => {
    //     console.info(result);
    //     this.model = new Weather(this.city,result.main.temp
    //       ,result.main.pressure,
    //       result.main.humidity,
    //       result.wind.speed,result.wind.deg);
    //   })
    //   .catch((error) => {
    //     console.info(error);
    //   })    
  }

}



//   api_key = "476e23fe1116f4e69d2a3e68672604e1";
//   city = "Singapore";
//   model = new Weather(this.city,0,0,0,0,0);
//   //apiResult: any;
//   constructor(private weatherSvc: WeatherService){}

//   ngOnInit(){
//     this.weatherSvc.getWeather(this.city, this.api_key)
//       .then(result=>{
//         console.log(result);
//         this.model = new Weather(this.city,result.main.temp
//           ,result.main.pressure,
//           result.main.humidity,
//           result.wind.speed,result.wind.deg);
//         //this.apiResult = result;
//       }).catch(error=>{
//         console.log(error);
//       })
//   }
// }