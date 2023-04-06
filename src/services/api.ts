import axios from "axios"

const apiKey = "2d515e7d043de5afcca3f693824b6475"

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?"
})

export const cityweather = async (cityName:string) => {
    try{
        const response = await api.get(`q=${cityName}&appid=${apiKey}`);
        console.log(response.data);
    }catch(error){
        throw error;
    }
}

