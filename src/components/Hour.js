import React from "react";
import { connect } from "react-redux";
import moment from "moment";

export class Hour extends React.Component {
  showWeatherByHour(data) {
    return data.list.map((item, i) => {
      const currentTime = item.dt_txt;
      const icon = item.weather[0].id;
      const temperature = item.main.temp;
      const humidity = item.main.humidity;
      const myArr = [humidity, currentTime];

      return (
        <tr>
          <td>{moment(currentTime).format("ddd HH:mm")}</td>
          <td>
            <i className={"wi wi-owm-day-" + icon} />
          </td>
          <td>{temperature}&#176;C</td>
          <td>{humidity}%</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="hourlyTable">
        <thead>
          <tr>
            <th>Time</th>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.showWeatherByHour)}</tbody>
      </table>
    );
  }
}

function mapStatetoProps({ weather }) {
  return { weather };
}

export default connect(mapStatetoProps)(Hour);
