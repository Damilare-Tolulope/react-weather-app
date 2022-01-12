import React from "react";
import moment from "moment";

const Weather = ({ weatherData }) => {
  const sunrise = new Date(
    (weatherData.sys.sunrise + weatherData.timezone) * 1000
  );
  console.log(sunrise);
  // console.log(new Date(weatherData.dt*1000))
  // console.log(weatherData.timezone*1000)
  // console.log(new Date(weatherData.dt*1000-(weatherData.timezone*1000))); // minu``s
  // console.log(new Date(weatherData.dt*1000+(weatherData.timezone*1000))); // plus``

  return (
    <div className="weather-page">
      <div className="head">
        <p>Current Weather</p>
      </div>
      <div className="main">
        <div className="left">
          <p className="city">
            {weatherData.name}, {weatherData.sys.country}
          </p>
          <p className="temp">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />{" "}
            <span>{weatherData.main.temp}&deg;</span>
          </p>
          <p className="weather">
            {weatherData.weather[0].main} -{" "}
            <span style={{ textTransform: "capitalize" }}>
              {weatherData.weather[0].description}
            </span>
          </p>
        </div>
        <div className="right">
          <p className="ss">
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>

          <p className="ss">
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <table>
            <tbody>
              <tr>
                <td>H</td>
                <td>Humidity</td>
                <td>
                  <p className="humidity">{weatherData.main.humidity}</p>
                </td>
              </tr>
              <tr>
                <td>P</td>
                <td>Pressure</td>
                <td>
                  <p className="pressure">{weatherData.main.pressure}</p>
                </td>
              </tr>
              <tr>
                <td>W</td>
                <td>Wind</td>
                <td>
                  <p className="wind-speed">{weatherData.wind.speed}</p>
                </td>
              </tr>
              <tr>
                <td>Wd</td>
                <td>Wind deg</td>
                <td>
                  <p className="wind-deg">{weatherData.wind.deg}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="down">
        <p className="day">
          Date: {moment().format("dddd")}, {moment().format("LL")}
        </p>
      </div>
    </div>
  );
};

export default Weather;
