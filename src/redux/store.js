import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import weatherReducer from './reducers/weatherReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    weather: weatherReducer
  }
});

export default store;

