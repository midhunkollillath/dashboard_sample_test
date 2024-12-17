import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDataForCities ,deleteWeatherData } from '../redux/actions/weatherActions';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, Typography, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WeatherDataPage = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.weatherData);

  useEffect(() => {
    dispatch(fetchWeatherDataForCities());
  }, [dispatch]);

  const columns = [
    { field: 'city', headerName: 'City', width: 250 },
    { field: 'temperature', headerName: 'Temperature', width: 150 },
    { field: 'humidity', headerName: 'Humidity', width: 150 },
    { field: 'windSpeed', headerName: 'Wind Speed', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.id)}>
          <DeleteIcon color='error' />
        </IconButton>
      ),
    },
  ];

  const rows = weatherData?.map((item) => ({
    id: item.id || Math.random().toString(36).substring(2, 15), 
    city: item.name,
    temperature: item.main.temp,
    humidity: item.main.humidity,
    windSpeed: item.wind.speed,
  }));

  const handleDelete = (id) => {
    dispatch(deleteWeatherData(id));
  };

  const [searchText, setSearchText] = useState('');

  const filteredRows = rows?.filter(
    (row) => row.city.toLowerCase().indexOf(searchText?.toLowerCase()) !== -1
  );

  return (
    <Box sx={{  backgroundColor: '#121212', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{color: '#ffffff' ,paddingTop:3}}>
          Weather Data
        </Typography>
        <TextField
          label="Search City"
          sx={{ mb: 2 ,input: { color: '#fff' }}}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            '& .MuiDataGrid-cell': {
              color: '#fff', 
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#2c2c2c', 
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#2c2c2c',  
            },
            '& .MuiCheckbox-root': {
              color: '#84d9c7', 
            },
          }}
        />
      </Container>
    </Box>
  );
};


export default WeatherDataPage;