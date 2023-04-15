export interface Weather {
  current_weather: CurrentWeather;
  elevation: number;
  generation_time: number;
  hourly: HourlyWeather;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface CurrentWeather {
  is_day: number;
  temperature: number;
  time: Date;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}

export interface HourlyWeather {
  temperature_2m: number;
  time: Date;
}
export interface HourlyUnits {
  temperature_2m: string;
  time: string;
}
