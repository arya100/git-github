import axios from 'axios';

const API_KEY = '124d2702ca49b084f48b4e8aba6f760c';
const Root_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
//we do this because to keep consistance b/w action creaters and reducers

export function fetchWeather(city){
	const url = `${Root_URL}&q=${city},us`;
    const request = axios.get (url);
 
   

	return {
		type : FETCH_WEATHER,
		payload : request
	};
}