function showCity() {
    return (
        <p>
            {/* 一列兩欄 */}
            <div className="row">
                {/* 第一欄 */}
                {
                    location.map((city) => {
                        return (
                            <div className="col">
                                {/* 卡片樣式 */}
                                <div className="card">
                                    {/* 標題 */}
                                    <div className="card-title">{FaCity.locationName}</div>
                                    {/* 內容 */}
                                    <div className="card-body">
                                        {/* 一列三欄 */}
                                        <div className="row2">
                                            {/* 第一欄 */}
                                            <div className="col2">
                                                <p>2日</p>
                                                <p>
                                                    上午6:00<br />
                                                    ~<br />
                                                    下午6:00
                                                </p>
                                                <p>
                                                    {/* <img src="./public/weatherIcon/晴時多雲.svg" alt="" /> */}
                                                    <img src="./weatherIcon/晴時多雲.svg" alt="" />
                                                </p>
                                                <p>晴時多雲</p>
                                                <p><FaUmbrella />10%</p>
                                            </div>

                                            {/* 第二欄 */}
                                            <div className="col2">
                                                <p>2日</p>
                                                <p>
                                                    上午6:00<br />
                                                    ~<br />
                                                    下午6:00
                                                </p>
                                                <p>
                                                    {/* <img src="./public/weatherIcon/晴時多雲.svg" alt="" /> */}
                                                    <img src="./weatherIcon/晴時多雲.svg" alt="" />
                                                </p>
                                                <p>晴時多雲</p>
                                                <p><FaUmbrella />10%</p>
                                            </div>

                                            {/* 第三欄 */}
                                            <div className="col2">
                                                <p>2日</p>
                                                <p>
                                                    上午6:00<br />
                                                    ~<br />
                                                    下午6:00
                                                </p>
                                                <p>
                                                    {/* <img src="./public/weatherIcon/晴時多雲.svg" alt="" /> */}
                                                    <img src="./weatherIcon/晴時多雲.svg" alt="" />
                                                </p>
                                                <p>晴時多雲</p>
                                                <p><FaUmbrella />10%</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>                   
                                )}
                            )
                            </div>
                            </p>

                                export default ShowCity