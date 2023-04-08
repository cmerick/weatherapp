export interface Weather{
    current_weather: CurrentWeather,
    latitude: number,
    longitude: number,
    timezone: string,
    
}

export interface CurrentWeather{
    is_day: number,
    temperature: number,
    time: Date,
    weathercode: number
    winddirection: number,
    windspeed: number,
}