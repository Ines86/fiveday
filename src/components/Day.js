import React from "react";
import { connect } from "react-redux";
import moment from "moment";

export class Day extends React.Component {
  showDailyWeather(data) {
    return data.list.map((item, i) => {
      const currentTime = moment.unix(item.dt).format("dddd");
      const icon = item.weather[0].id;
      const temperature = item.temp.day;
      const humidity = item.humidity;
      const pressure = item.pressure;

      return (
        <tr>
          <td>{currentTime}</td>
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
        <tbody>{this.props.dailyWeather.map(this.showDailyWeather)}</tbody>
      </table>
    );
  }
}

function mapStatetoProps({ dailyWeather }) {
  return { dailyWeather };
}

export default connect(mapStatetoProps)(Day);
