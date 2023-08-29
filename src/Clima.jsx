
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherComponent() {

  
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const apiKey = "7273842f78e9cc5efe909fab65025514";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;

    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Weather in {weather?.name}</h1>
    </div>
  );
}

export default WeatherComponent;


