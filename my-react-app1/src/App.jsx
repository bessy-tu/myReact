
// 建立新的元件
function MyComponent() {
  return (
    // 空標籤:Fragment
    <>
      <h1>React</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App
