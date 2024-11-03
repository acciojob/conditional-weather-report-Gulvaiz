import React, { useState } from 'react'

const WeatherDisplay = ({data}) => {
  
 const {temperature , conditions} = data
 const color = temperature > 20 ? "red" : "blue"

    return (
    <div>
       <p style ={{color}}>temperature : {temperature}</p>
       <p>condition: {conditions}</p>
    </div>


)
}

export default WeatherDisplay
 