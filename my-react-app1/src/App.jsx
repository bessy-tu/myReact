// import banner from'../public/images/banner.jpg'
// 載入App.css
import './App.css';

function App() {
  return (
    <>
      <div className="wrap">
        {/* 頁首廣告 */}
        <header>
          <img src="images/banner.jpg" alt="" />
        </header>


        {/* 特色區 */}

        <div className='class1'>
          <div className='box'>
            <h2>教學影音</h2>
            <p>透過影音課程，來了解軟體的核心概念以及入門，並著重範例練習以了解其中之應用方式</p>
          </div>

          <div className='box'>
            <h2>良性互動</h2>
            <p>學習過程中，若您提到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決</p>
          </div>

          <div className='box'>
            <h2>趨勢分享</h2>
            <p>分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展</p>
          </div>
        </div>

        {/* 主標 */}
        <div className='slogan'>
          <h3>讓學習成為一種習慣</h3>
        </div>

        {/* 推薦課程 */}
        <div className='class2'>
          <h2>推薦課程</h2>
          <div className="classC">
            {/* 課程1 */}
            <div className='box2'>
              <p><img src="images/unity.jpg" alt="" /></p>
              <h3>Unity 5</h3>
              <p className='p-blue'>最新的Unity公開課程，讓你一步一步做出心中理想的遊戲</p>
              <p>講師:XXX</p>
              <p>影音課程時數 : 4小時</p>
              <p><span className='span'>原價NT$1600</span>NT$1200</p>
              <p><button>付款上課去</button></p>
            </div>

            {/* 課程2 */}
            <div className='box2'>
              <p><img src="images/gamesalad.jpg" alt="" /></p>
              <h3>GameSalad 2D遊戲製作</h3>
              <p className='p-blue'>視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲</p>
              <p>講師:XXX</p>
              <p>影音課程時數 : 8小時</p>
              <p><span className='span'>原價NT$3200</span>NT$1600</p>
              <p><button>付款上課去</button></p>
            </div>

            {/* 課程3 */}
            <div className='box2'>
              <p><img src="images/gwd.jpg" alt="" /></p>
              <h3>Google Web Design</h3>
              <p className='p-blue'>用於建立HTML5廣告動畫，透過時間軸將各種物件和事件以動畫方式呈現</p>
              <p>講師:XXX</p>
              <p>影音課程時數 : 8小時</p>
              <p><span className='span'>原價NT$3200</span>NT$1600</p>
              <p><button>付款上課去</button></p>
            </div>
          </div>

        </div>

        {/* 頁尾區 */}

        <footer>
          <p>&copy; 2024.11.12 杜心瑜</p>
        </footer>
      </div>
    </>
  )
}



export default App