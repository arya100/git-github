import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weathers';

const rootReducer = combineReducers({
  weather :WeatherReducer
});

export default rootReducer;
