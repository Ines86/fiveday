import React from "react";
import { connect } from "react-redux";
import moment from "moment";

export class App extends React.Component {
  showWeather(data) {
    const icon = data.list[0].weather[0].id;
    const temperature = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;
    const clouds = data.list[0].clouds.all;
    const windSpeed = data.list[0].wind.speed;
    const humidity = data.list[0].main.humidity;
    const pressure = data.list[0].main.pressure;
    const currentTime = data.list[0].dt_txt;
    const name = data.city.name;

    return (
      <div key={icon} id="weather-container">
        <div id="forecast">
          <h2>{name}</h2>
          <i className={"wi wi-owm-day-" + icon} />
          <p className="desc">{description}</p>
          <p className="temp">{temperature}&#176;C</p>
        </div>
        <div id="details">
          <ul>
            <li>
              <i className="wi wi-cloudy" /> {clouds}%
            </li>
            <li>
              <i className="wi wi-strong-wind" /> {windSpeed} meter/sec
            </li>
          </ul>
          <ul>
            <li>
              <i className="wi wi-humidity" /> {humidity}%
            </li>
            <li>
              <i className="wi wi-barometer" /> {pressure} hPa
            </li>
          </ul>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.props.weather.map(this.showWeather)}</div>;
  }
}

function mapStatetoProps({ weather }) {
  return { weather };
}

export default connect(mapStatetoProps)(App);
