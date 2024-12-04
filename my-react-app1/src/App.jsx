import { useEffect, useState } from "react"
import axios from 'axios';
import { FaUmbrella } from "react-icons/fa";

import './App.css';


function App() {
  const [weatherList, setWeatherList] = useState([]);
  const arrData = [
    {},
    {},
  ]

  useEffect(() => {
    (async () => {
      // const data = await axios.get('./F-C0032-001.json');
      const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
      // console.log(data);

      const { location } = data.data.cwaopendata.dataset;
      // console.log(location);
      setWeatherList(location);

      // const location = data.data.cwaopendata.dataset;
      // console.log(location);
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
                <div className="content">
                  {
                    city.weatherElement[0].time.map((time, index) => {
                      return (
                        <div className="item2" key={index}>
                          {/* 日期 */}
                          {/* <p>4日</p> */}
                          <p>
                            {
                              new Date(time.startTime).toLocaleString(undefined, {
                                day: 'numeric'
                              })
                            }
                          </p>

                          {/* 時間 */}
                          <p>
                            {
                              new Date(time.startTime).toLocaleString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric'
                              })
                            }
                            <br />~<br />
                            {
                              new Date(time.endTime).toLocaleString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric'
                              })
                            }
                          </p>
                          {/* 天氣圖 */}
                          {/* <p><img src="./public/images/weatherIcon/陰短暫雨.svg" alt="" /></p> */}
                          <p><img src={`./public/images/weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>

                          {/* 天氣圖名稱 */}
                          {/* <p>短暫陣雨</p> */}
                          <p>{time.parameter.parameterName}</p>

                          {/* 降雨機率 */}
                          {/* <p><FaUmbrella />30%</p> */}
                          <p>
                            <FaUmbrella />
                            {
                              city.weatherElement[4].time[index].parameter.parameterName
                            }
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}
export default App