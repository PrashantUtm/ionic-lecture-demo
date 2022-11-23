import { Forecasts } from "../enums/forecasts";

export interface Forecast {
    date: Date,
    readonly id: number,
    type: Forecasts,
    rainfall?: number
}
