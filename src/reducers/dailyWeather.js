import { FETCH_DAILY_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DAILY_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}