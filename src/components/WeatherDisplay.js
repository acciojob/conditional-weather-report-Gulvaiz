const WeatherDisplay = ({data}) => {
  
    const {temperature , conditions} = data
    const color = temperature > 20 ? "red" : "blue"
   
       return (
       <div>
          <p style ={{color}}><span>Temperature: {temperature}</span></p>
          <p><span>Conditions: {conditions}</span></p>
       </div>
   )
   }
   
   export default WeatherDisplay