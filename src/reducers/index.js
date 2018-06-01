import { combineReducers } from 'redux';
import weather from './weather';
import dailyWeather from './dailyWeather';

const rootReducer = combineReducers({
    weather: weather,
    dailyWeather: dailyWeather
});

export default rootReducer;