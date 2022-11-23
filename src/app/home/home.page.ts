import { Component } from '@angular/core';
import { Forecast } from '../interfaces/forecast';
import { Forecasts } from '../enums/forecasts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public forecastToday: Forecast;
  public forecastTomorrow: Forecast;



  public doSomeProcessing(): void {
    var myArray = ['hi', 1, NaN, -Infinity, true, 'go', 3020, [32, 32]];

    myArray.forEach(item => console.log(Number(item.toString())));
  }

  constructor() {
    this.forecastToday = {
      date: new Date(),
      id: 1,
      type: Forecasts.Sunny
    };

    this.forecastTomorrow = {
      date: new Date(2022, 11, 20),
      id: 2,
      type: Forecasts.Rainy,
      rainfall: 80
    }

    this.forecastToday.rainfall = 3;

    this.doSomeProcessing();
  }

  public getForecastTypeLabel(forecastType: Forecasts): string {
    switch(forecastType) {
      case Forecasts.Rainy:
        return 'rainy';
      case Forecasts.Sunny:
        return 'sunny';
      default:
        return 'unknown';
    };
  }

  public displayRainfall(forecast: Forecast): string {
    return forecast.type === Forecasts.Rainy ? `and rainfall amount expected is ${forecast.rainfall} mm.` : '';
  }

  

}
