const initialState = {
  weatherData: [], 
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_FOR_CITIES':
      return { ...state, weatherData: action.payload };
    case 'DELETE_WEATHER_DATA':
      return {
        ...state,
        weatherData: state.weatherData.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default weatherReducer;
