// 傳遞組件
// 把組件放到另一個組件的內容裡面
// 這種寫法在react裡面叫做組合(composition)
// 此方法在不影響組件功能的基礎上，別外再給組件加入額外的功能

// 建立一個新的組件
function SecondComponent() {
  return <h1>我是SecondComponent組件</h1>
}


// 子組件
// function Mycomponent(){
// return <><SecondComponent/></>
// }

function Mycomponent({children}) {
  // return <>{children}</>
  return <>
  我是Mycomponent組件
  {children}
  </>
}

// 父組件
function App() {
  return (
    <>
    {/* <Mycomponent children={<SecondComponent/>}/> */}
      <Mycomponent>
        {/* 因為children是react內建的屬性，所以傳送組件的時候，可以不用寫children屬性 */}
        <SecondComponent/>
      </Mycomponent>
    </>
  )
}


export default App
