import axios from 'axios';

const cities = [
  'Chennai',
  'Bangalore',
  'Hyderabad',
  'Kochi',
   'Trivandrum',
   'Thrissur',
   'Goa',
  'Madurai',
  'Coimbatore'
];

export const fetchWeatherDataForCities = () => {
  return async (dispatch) => {
    try {
      const weatherPromises = cities.map(city =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f14939dcd17c882cc5c96bd9eb21710b`)
      );

      const responses = await Promise.all(weatherPromises);

      const weatherData = responses.map(response => response.data);
 
      dispatch({
        type: 'FETCH_WEATHER_FOR_CITIES',
        payload: weatherData
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      dispatch({
        type: 'FETCH_WEATHER_ERROR',
        payload: error.message
      });
    }
  };
};

export const deleteWeatherData = (id) => ({
  type: 'DELETE_WEATHER_DATA',
  payload: id,
});
