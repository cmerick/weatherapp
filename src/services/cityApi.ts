import axios from 'axios';


export const api = axios.create({
    baseURL: "https://geocoding-api.open-meteo.com/v1"
})

export const searchCity = async (cityName:string) => {
    try {
        const response = await api.get(`/search?name=${cityName}&language=${navigator.language}&count=20&format=json`)
        return response.data
    } catch (error) {
        console.log((error as Error).message)
        throw error;
    }
}