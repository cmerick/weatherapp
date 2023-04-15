import { api } from "./forecastApi";

const CapitalWeatherService = {
  novayork: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=40.71427&longitude=-74.00597&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  tokyo: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=35.6895&longitude=139.69171&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  hongkong: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=22.27832&longitude=114.17469&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  london: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=51.50853&longitude=-0.12574&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  frankfurt: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=50.11552&longitude=8.68417&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  sidney: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=-33.865143&longitude=151.209900&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  toronto: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=43.70011&longitude=-79.4163&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  saopaulo: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=-23.5475&longitude=-46.63611&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  paris: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=48.85341&longitude=2.3488&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
  mumbai: async () => {
    try {
      const response = await api.get(
        `/forecast?latitude=19.07283&longitude=72.88261&hourly=temperature_2m&current_weather=true&timezone=America/New_York`
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
};

export default CapitalWeatherService;
