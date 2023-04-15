import { useEffect, useState } from "react";
import ReactCountryFlags from "react-country-flag";
import { faCloud, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cityWeatherNow } from "../../services/forecastApi";
import { searchCity } from "../../services/cityApi";
import { CityData } from "../../interfaces/citydata.dto";
import { Weather } from "../../interfaces/forecastdata.dto";
import { Input } from "../../components/input";
import CapitalWeatherService from "../../services/capitalWeathers";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<CityData[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityData>();
  const [weather, setWeather] = useState<Weather>();
  const [visible, setVisible] = useState(false);

  const getNovaYork = async () => {
    const response = await CapitalWeatherService.novayork();
    setWeather(response);
  };
  const getTokyo = async () => {
    const response = await CapitalWeatherService.tokyo();
    setWeather(response);
  };
  const getHongkong = async () => {
    const response = await CapitalWeatherService.hongkong();
    setWeather(response);
  };
  const getLondon = async () => {
    const response = await CapitalWeatherService.london();
    setWeather(response);
  };
  const getFrankfurt = async () => {
    const response = await CapitalWeatherService.frankfurt();
    setWeather(response);
  };
  const getSidney = async () => {
    const response = await CapitalWeatherService.sidney();
    setWeather(response);
  };
  const getToronto = async () => {
    const response = await CapitalWeatherService.toronto();
    setWeather(response);
  };
  const getSaopaulo = async () => {
    const response = await CapitalWeatherService.saopaulo();
    setWeather(response);
  };
  const getParis = async () => {
    const response = await CapitalWeatherService.paris();
    setWeather(response);
  };
  const getMumbai = async () => {
    const response = await CapitalWeatherService.mumbai();
    setWeather(response);
  };

  const getWeather = async () => {
    try {
      const response = await cityWeatherNow(
        selectedCity?.latitude,
        selectedCity?.longitude,
        selectedCity?.timezone
      );
      setWeather(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    async function fetchSuggestions() {
      const response = await searchCity(inputValue);
      console.log({ ...response.results });
      setSuggestions(response.results);
    }

    fetchSuggestions();
  }, [inputValue]);

  return (
    <div className=" bg-night flex justify-center text-base h-full font-serif">
      <header className="mt-8 w-96 max-h-8">
        <div className=" max-h-8 flex justify-center items-center mb-4">
          <Input
            type="text"
            placeholder="Your city..."
            value={inputValue}
            onChange={(event: any) => setInputValue(event.target.value)}
            onFocus={() => setVisible(true)}
            onBlur={() => setTimeout(() => setVisible(false), 200)}
          />
          <button
            className="ml-4 max-h-8 w-8 px-2"
            onClick={() => getWeather()}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <ul
          className="glassMorphism px-2 py-4"
          style={{ visibility: visible ? "visible" : "collapse" }}
        >
          <hr />
          {suggestions ? (
            suggestions.map((suggestion) => (
              <button
                className="w-full text-left hover:bg-glass"
                onClick={() => {
                  setInputValue(suggestion?.name ?? "");
                  setSelectedCity(suggestion);
                }}
              >
                <li
                  className="max-h-30 p-1"
                  key={suggestion.id}
                  style={{
                    listStyle: "none",
                  }}
                >
                  <ReactCountryFlags
                    countryCode={suggestion?.country_code ?? ""}
                    svg
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />{" "}
                  <span className=" overflow-hidden">{suggestion.name}</span>,{" "}
                  {suggestion.admin1}
                </li>
                <hr />
              </button>
            ))
          ) : (
            <li>No Local Found</li>
          )}
        </ul>
      </header>
      <nav className="text-3xl">
        | <button onClick={getNovaYork}>Nova York</button> |{" "}
        <button onClick={getTokyo}>Tokyo</button> |{" "}
        <button onClick={getHongkong}>Hong Kong</button> |{" "}
        <button onClick={getLondon}>London</button> |{" "}
        <button onClick={getFrankfurt}>Frankfurt</button> |{" "}
        <button onClick={getSidney}>Sidney</button> |{" "}
        <button onClick={getToronto}>Toronto</button> |{" "}
        <button onClick={getSaopaulo}>São Paulo</button> |{" "}
        <button onClick={getParis}>Paris</button> |{" "}
        <button onClick={getMumbai}>Mumbai</button> |{" "}
      </nav>
    </div>
  );
}

export default Home;
