// 導入外部CSS檔案
import "./App.css"


// 建立新的元件
function MyComponent() {
  return (
    // 空標籤:Fragment
    <>
      <h2>React</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}

function App() {

  // 建立變數
  const strName="coco";
  return (
    <div>
      {/* JSX中使用javascript變數，前後加大括號{變數名稱} */}
      <h1 style={{
        color:'red',
        backgroundColor:'yellow',
        width:'300px',
      }}>{strName.toLocaleUpperCase()}, 午安</h1>

      {/* 屬性中使用變數 */}
      <label className="unLinecolor" htmlFor="userName">請輸入姓名:</label>
      {/* placeholder => 提示字 */}
      <input type="text" id="userName" placeholder={strName}/>

      {/* <MyComponent /> */}
    </div>
  )
}

export default App
