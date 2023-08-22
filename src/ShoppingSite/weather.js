import React, { useState } from "react";

function Weather() {
  const [weather, setWeather] = useState("");
  const [data, setData] = useState({});
  
  async function handlechange() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=c7a9299a3d8da1d910da08bcffb48a3b`;
    
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setWeather(e.target.value)} />
        <button onClick={handlechange}>Get Weather</button>
      </div>
      <div>
        {data.cod === 200 ? (
          <div>
            <p>Location: {data.name}</p>
            <p>Temperature: {data.main.temp}</p>
            <p>Humidity: {data.main.humidity}</p>
          </div>
        ) : (
          <div>
            <h3>{data.message}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;

