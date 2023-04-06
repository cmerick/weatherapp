import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.open-meteo.com/v1"
})

export const cityWeatherNow = async (lat: string, lon: string) => {
    //const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    try{
        const response = await api.get(`/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timeformat=unixtime`);
        console.log(response.data);
    }catch(error){
        console.log((error as Error).message)
        throw error;
    }
}

