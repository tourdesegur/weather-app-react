import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Weather cityDefault="Lisbon"/>
        </div>
        <div>
          <a href="https://github.com/tourdesegur/weather-app-react">
            Open-source code
          </a>
          , by Vik Perehuda
        </div>
      </div>
    </div>
  );
}
