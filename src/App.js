import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>

        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolio-projectpn.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matt Delac
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/PetronellaNdlovu/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://pnreact-weather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
