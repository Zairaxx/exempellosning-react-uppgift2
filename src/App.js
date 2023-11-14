import logo from "./logo.svg";
import Profile from "./Profile";
import "./App.css";
import { useState } from "react";

function App() {
  let data = [
    {
      name: "Brandon",
      lastName: "Duarte Tsegai",
      age: 29,
      hobby: "Salsa",
    },
    {
      name: "Fandon",
      lastName: "Duarte Tsegai",
      age: 29,
      hobby: "Salsa",
    },
    {
      name: "Trandon",
      lastName: "Duarte Tsegai",
      age: 29,
      hobby: "Salsa",
    },
    {
      name: "Krandon",
      lastName: "Duarte Tsegai",
      age: 29,
      hobby: "Salsa",
    },
  ];
  let [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "App darkMode" : "App"}>
      <h1>
        Exempellösning - Uppgift #2
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </h1>
      {data.map((profile) => {
        return <Profile profile={profile} />;
      })}
    </div>
  );
}

export default App;
