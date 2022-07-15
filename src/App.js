import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search'

export default function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather/?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`



  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <Search 
       location={location}
       onKeyPress={searchLocation}
       onChange={event => setLocation(event.target.value)}
      />
      <div className="container">
        <div className="top">
        {data.name !== undefined &&
          <div className="location">
           {data.main ? <p>{data.name.toUpperCase()}</p> : null}
          </div>}
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="day">
              <p>Monday</p>
            </div>
            <div className="day">
              <p>Tuesday</p>
            </div>
            <div className="day">
              <p>Wednesday</p>
            </div>
            <div className="day">
              <p>Friday</p>
            </div>
            <div className="day">
              <p>Thursday</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

