
import React from "react";
import './../styles/App.css';
import { useState,useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' })

  useEffect(() => {
         setWeather({ temperature: 25, conditions: 'sunny' })
  },[])

  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay data={weather}/>
    </div>
  )
}

export default App
