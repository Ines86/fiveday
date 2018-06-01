import axios from 'axios';

const API_KEY = "7a6fb46593b2eb27b5c12d3e169f7c87";
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL2 = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_DAILY_WEATHER = "FETCH_DAILY_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}&units=metric`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function fetchDailyWeather(city) {
    const url = `${ROOT_URL2}&q=${city}&units=metric`;
    const request = axios.get(url);
    return {
        type: FETCH_DAILY_WEATHER,
        payload: request
    };
}