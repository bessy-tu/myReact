// function ShowWeather(){
//     return <div>123</div>
// }
// export default ShowWeather

import { FaUmbrella } from "react-icons/fa";

export default function ShowWeather({ city }) {
    return (

        <div className="content">
            {
                city.weatherElement[0].time.map((time, index) => {
                    return (
                        <div className="item2" key={index}>
                            {/* 日期 */}
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
    )
}