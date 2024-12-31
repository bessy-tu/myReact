import { createContext, useContext, useState } from "react"

export default function App() {

  // 建立共用環境區域
  const userContext = createContext({});
  // 建立使用者變數
  const [username, setUsername] = useState('demo');
  // 建立登入鈕的控制
  const [islogin, setIslogin] = useState(false);

  // 建立登入元件
  const LoginForm = () => {
    //因為要被放在共用區，所以要搬到APP元件內
    // const [username, setUsername] = useState('');
    // 從共用區UserContext解構出username, setUsername
    const { username, setUsername } = userContext(UserContext)
    return (
      <>
        <label htmlFor="username">使用者名稱</label>
        <input
          type="text"
          id="username"
          placeholder="請輸入使用者名稱"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="button" onClick={() => { setIslogin(true) }}>登入</button>
      </>
    )
  }

  // 登入後的歡迎元件
  const Greeting = () => {
    // 從共用區UserContext取得username
    const { username } = useContext(userContext);
    return (
      <div>
        Hi, {username}
      </div>
    )
  }

  // 建立一個不同元件來使用username
  // const ShowName = ()=>{
  //   const 
  // }

  return (
    <>
      <h1>useContent</h1><hr style={{ marginBottom: "50px" }} />
      <userContext.Provider value={{ username, setUsername, setIslogin }}>

        {/* 
         <LoginForm />
        <br />
        <Greeting />
         */}

        {/* 將原本的架構改成三元運算子 */}

        {
          islogin ? <Greeting /> : <LoginForm />
        }
      </userContext.Provider>




    </>
  )
}