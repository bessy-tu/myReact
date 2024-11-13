// 推薦課程元件
function ShowClassC() {
    // 推薦課程資料
    const classCData = [
        {
            id: 1,
            img: "images/unity.jpg",
            uni: "Unity 5",
            write: "最新的Unity公開課程，讓你一步一步做出心中理想的遊戲",
            teacher: "講師:XXX",
            time: "影音課程時數 : 4小時",
            money: "原價NT$1600",
            doller: "NT$1200",
            bnt: "付款上課去",
        },
        {
            id: 2,
            img: "images/gamesalad.jpg",
            uni: "GameSalad 2D遊戲製作",
            write: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
            teacher: "講師:XXX",
            time: "影音課程時數 : 8小時",
            money: "原價NT$3200",
            doller: "NT$1600",
            bnt: "付款上課去",
        },
        {
            id: 3,
            img: "images/gwd.jpg",
            uni: "Google Web Design",
            write: "用於建立HTML5廣告動畫，透過時間軸將各種物件和事件以動畫方式呈現",
            teacher: "講師:XXX",
            time: "影音課程時數 : 8小時",
            money: "原價NT$3200",
            doller: "NT$1600",
            bnt: "付款上課去",
        },
    ]

    return (
        <>
            {
                classCData.map((item) => {
                    return (
                        <div className='box2' key={item.id}>
                            <p><img src={item.img} alt="" /></p>
                            <h3>{item.uni}</h3>
                            <p className='p-blue'>{item.write}</p>
                            <p>{item.teacher}</p>
                            <p>{item.time}</p>
                            <p><span className='span'>{item.money}</span>{item.doller}</p>
                            <p><button>{item.bnt}</button></p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowClassC