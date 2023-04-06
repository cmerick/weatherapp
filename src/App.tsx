import { cityWeatherNow } from "./services/api";
function App() {
  return (
    <div>
      <h1>hello world</h1>
      <button onClick={() => cityWeatherNow("-23.21", "-46.78")}>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
