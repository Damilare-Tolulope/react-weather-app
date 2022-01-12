import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Loading from "./components/Loading";
import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("London");

  const searchText = (text) => {
    setCity(text);
  };

  useEffect(() => {
    const fetchData = async () => {
      const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
      const WEATHER_API_KEY = "0b2033d66a162875c0f3cf4e0f70b20f";
      console.log(WEATHER_API_KEY, WEATHER_API_URL);

      await fetch(
        `${WEATHER_API_URL}/weather/?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setData(result);
          setLoading(false);
        })
        .catch(() => console.log("there error fetching the data"));
    };
    fetchData();
  }, [city]);

  return (
    <div className="App">
      {console.log(data)}

      <Search searchText={searchText} />
      {typeof data.main != undefined ? (
        loading ? (
          <Loading />
        ) : (
          <Weather weatherData={data} />
        )
      ) : (
        <div>Wooooo </div>
      )}
      {data.cod === "404" ? <p>City not found</p> : <></>}
    </div>
  );
};

export default App;
