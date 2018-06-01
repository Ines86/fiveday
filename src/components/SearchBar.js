import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather, fetchDailyWeather } from "../actions/index";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cityName: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ cityName: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.cityName);
    this.props.fetchDailyWeather(this.state.cityName);
    this.setState({ cityName: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter a city name"
          className="form-control"
          value={this.state.cityName}
          onChange={this.onInputChange}
        />
        <button type="submit" className="btn">Search</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchDailyWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);