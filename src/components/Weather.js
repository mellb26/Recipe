import React, { useState, useEffect } from "react";
import axios from "axios";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState("");

  let apiKey = "221ce54c126cf2b8e254ab5e0c55e68b";
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=-37.6861&lon=176.1667&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='tinted-background'> 
        <div className="container1">
          <div className="Weather-card">
      {weatherData ? (
        <>
                <h1>{weatherData.name}</h1>
          <p>
                  Todays temp: {weatherData.main.temp} <br></br>
            But it feels like: {' '}
            {weatherData.main.feels_like}
          </p>
        </>
      ) : (
        <h2> Loading...</h2>
      )}
      </div>
      </div>
    </div>
    </div>
  );
};

export default Weather;
