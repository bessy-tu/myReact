// 特色區元件
function ShowClass() {
    // 特色區資料
    const classData = [
        {
            id: 1,
            title: "教學影音",
            desc: "透過影音課程，來了解軟體的核心概念以及入門，並著重範例練習以了解其中之應用方式",
        },
        {
            id: 2,
            title: "良性互動",
            desc: "學習過程中，若您提到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決",
        },
        {
            id: 3,
            title: "趨勢分享",
            desc: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展",
        },
    ]

    return (
        <>
            {
                classData.map((item) => {
                    return (
                        <div className='box' key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowClass