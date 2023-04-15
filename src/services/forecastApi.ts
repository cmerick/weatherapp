import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

export const cityWeatherNow = async (
  lat?: number,
  lon?: number,
  timeZone?: string
) => {
  //const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  try {
    const response = await api.get(
      `/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true&timezone=${timeZone}`
    );
    return response.data;
  } catch (error) {
    console.log((error as Error).message);
    throw error;
  }
};
