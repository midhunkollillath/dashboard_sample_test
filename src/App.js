import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TaskRankingPage from './pages/TaskRankingPage';
import WeatherDataPage from './pages/WeatherPage'; 

function App() {
  return (
    <Router>
       <Toaster /> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/task-ranking" element={<TaskRankingPage />} />
        <Route path="/weather-data" element={<WeatherDataPage />} />
      </Routes>
    </Router>
  );
}

export default App;
