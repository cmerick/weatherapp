import { useEffect, useState } from "react";
import ReactCountryFlags from "react-country-flag";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cityWeatherNow } from "../../services/forecastApi";
import { searchCity } from "../../services/cityApi";
import { CityData } from "../../interfaces/citydata.dto";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<CityData[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityData>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchSuggestions() {
      const response = await searchCity(inputValue);
      console.log({ ...response.results });
      setSuggestions(response.results);
    }

    fetchSuggestions();
  }, [inputValue]);

  return (
    <div className="bg-base">
      <h1>hello world</h1>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onFocus={() => setVisible(true)}
        onBlur={() => setTimeout(() => setVisible(false), 200)}
      />
      <ul style={{ visibility: visible ? "visible" : "hidden" }}>
        {suggestions ? (
          suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              style={{
                listStyle: "none",
                height: "30px",
              }}
            >
              <button
                style={{
                  textDecoration: "none",
                  height: "30px",
                }}
                onClick={() => {
                  setInputValue(suggestion?.name ?? "");
                  setSelectedCity(suggestion);
                  console.log({ ...suggestion });
                }}
              >
                <ReactCountryFlags
                  countryCode={suggestion?.country_code ?? ""}
                  svg
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
                , {suggestion.name}, {suggestion.admin1}
              </button>
            </li>
          ))
        ) : (
          <li>No Local Found</li>
        )}
      </ul>
      <button
        onClick={() => {
          cityWeatherNow(
            selectedCity?.latitude,
            selectedCity?.longitude,
            selectedCity?.timezone
          );
        }}
      >
        Clique aqui
      </button>
    </div>
  );
}

export default Home;
