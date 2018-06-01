import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import _ from "lodash";
import Chart from "chart.js";
import { LineChart, BarChart, ColumnChart, AreaChart } from "react-chartkick";

export class Charts extends React.Component {
  showWeatherByHour(data) {
    Array.prototype.zip = function (arr) {
      return this.map(function (e, i) {
        return [e, arr[i]];
      });
    };

    const humidity = data.list.map(weather => weather.main.humidity);
    const temperature = data.list.map(weather => weather.main.temp);
    const pressure = data.list.map(weather => weather.main.pressure);
    const windSpeed = data.list.map(weather => weather.wind.speed);
    const currentTime = data.list.map(weather =>
      moment(weather.dt_txt).format("ddd HH:mm")
    );
    const name = data.city.name;
    const time = moment(currentTime).format("ddd HH:mm");

    //Lodash
    const currHumidity = currentTime.zip(humidity);
    const currTemp = currentTime.zip(temperature);
    const currPressure = currentTime.zip(pressure);
    const currWindSpeed = currentTime.zip(windSpeed);

    return (
      <div className="charts" key={name}>
        <h2>{name}</h2>
        <h3>Temperature (&#176;C)</h3>
        <LineChart
          data={currTemp}
          id="temps"
          className="chartdata"
          width="500px"
          height="300px"
        />
        <h3>Humidity (%)</h3>
        <AreaChart
          data={currHumidity}
          id="humidities"
          className="chartdata"
          width="500px"
          height="300px"
        />
        <h3>Pressure (hPa)</h3>
        <LineChart
          data={currPressure}
          id="pressures"
          className="chartdata"
          width="500px"
          height="300px"
        />
        <h3>Wind Speed (meter/sec)</h3>
        <BarChart
          data={currWindSpeed}
          id="wind"
          className="chartdata"
          width="500px"
          height="600px"
        />
      </div>
    );
  }

  render() {
    return <div>{this.props.weather.map(this.showWeatherByHour)}</div>;
  }
}

function mapStatetoProps({ weather }) {
  return { weather };
}

export default connect(mapStatetoProps)(Charts);
