import { useEffect, useState } from "react"
import axios from 'axios';
import { FaUmbrella } from "react-icons/fa";

import './App.css';
import ShowWeather from "./component/ShowWeather";

function App() {
  const [weatherList, setWeatherList] = useState([]);
  
  useEffect(() => {
    (async () => {
      // const data = await axios.get('./F-C0032-001.json');
      const data = await axios.get('https://bessy-tu.github.io/myReact/json/F-C0032-001.json');
      // console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      // console.log(location);
      setWeatherList(location);
    })()
  }, [])

  return (
    // locationName => 縣市名稱
    // elementName  => Wx  =>天氣概況
    // elementName  => PoP => 降雨機率


    <div className="wrip">
      <h2>36小時天氣預報</h2>
      <div className="container">
        {
          weatherList.map((city) => {
            return (
              <div className="item" key={city.locationName}>
                <h3> {city.locationName} </h3>
                <ShowWeather city={city} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default App