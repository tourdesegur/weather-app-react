import "./App.css";
import MainCol from "./MainCol";
import SecondCol from "./SecondCol";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <MainCol />
          <SecondCol />
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
