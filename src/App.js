import React, {  useEffect, useState  } from 'react';
import './App.css';
import {getWeatherData} from './data/weatherapi';


function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');

//this is the function that calls the weather api

  const getData = async () => {
    try{
      const data = await getWeatherData(city);
      setWeather(data);
      console.log(data);
    }catch(error) {
      console.log(error.message);
    }
  }
      

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
        <div className="card">
          <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
            <div className="search-form">
              <input type="text"
              placeholder="Enter Your City...."
              onChange={(e) => setCity(e.target.value)} 
              />
              <button type= "button" onClick={()  => getData()}>Search</button>
            </div>
            {(typeof weather.main != "undefined") ? (
      <div> 
          <div className="main-container">
            <h4>Live Weather Condition</h4> 
          </div>
            <h3>{weather.weather[0].main}</h3>
          <div className="temprature">
            <h1>{parseFloat(weather.main.temp - 273.15).toFixed(1)}&deg;C</h1>
          </div>
          <div className="location">
            <h3>{weather.name}, {weather.sys.country}</h3>
          </div>
          <div className="temprature-change">
            <h6>Humidity: {weather.main.humidity}%</h6>
          </div>
      </div>
        ) : ('')}
    </div>
  </div>

  );
};


export default App;
