import './WeatherApp.css';
import React, { useState } from 'react';

export default function WeatherApp() {
    const apiKey = "0cf5cdac0647822fdb4abcac019bc8ff";

    const [weatherData, setWeatherData] = useState(null);
    const [searchCity, setSearchCity] = useState('');

    const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const getWeatherByLocation = async (city) => {
        try {
            const resp = await fetch(url(city), {
                origin: "cors"
            });
            const respData = await resp.json();
            setWeatherData(respData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const Ktoc = (K) => {
        return Math.floor(K - 273.15);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchCity) {
            await getWeatherByLocation(searchCity);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                        placeholder="Enter city name"
                    />
                    <button type="submit">Search</button>
                </form>

                {weatherData && (
                    <div className="weather">
                        <h2>
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
                            {Ktoc(weatherData.main.temp)}°C
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
                        </h2>
                        <small>{weatherData.weather[0].main}</small>
                    </div>
                )}
            </div>
        </>
    )

}
