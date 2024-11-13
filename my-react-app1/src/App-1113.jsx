// import banner from'../public/images/banner.jpg'
// 載入App.css
import './App.css'
import ShowClass from './ShowClass.jsx'
import ShowClassC from './ShowClassC.jsx'


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
          <ShowClass />
        </div>

        {/* 主標 */}
        <div className='slogan'>
          <h3>讓學習成為一種習慣</h3>
        </div>

        {/* 推薦課程 */}
        <div className='class2'>
          <h2>推薦課程</h2>
          <div className="classC">
            <ShowClassC />
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
