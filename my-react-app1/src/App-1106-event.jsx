

function App() {

  // 建立函式方法1
  function sayHi(){
    alert('Hello3')
  }

  // 建立函式方法2
  const sayHi2=()=>{
    alert('Hello4')
  }

  return (

    <div>
      {/* 事件處理1:在HTML標籤上綁定事件 */}
      
      <button onClick={
        // 匿名函式
        function () {
          alert('Hello1')
        }
      }>打招呼1</button>

      {/* 箭頭函式 */}
      <button onClick={() => { alert('Hello2') }}>打招呼2</button>

      {/* 事件處理2:呼叫函式 */}
      {/* 等待被呼叫的函式，函示名稱後面不可以加上()，否則會直接執行 */}
      <button onClick={sayHi}>打招呼3</button>
      <button onClick={sayHi2}>打招呼4</button>

    </div>
  )
}

export default App
