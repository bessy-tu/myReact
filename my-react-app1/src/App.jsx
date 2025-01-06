import { useState } from "react"

export default function App() {
  const [search, setsearch] = useState('');
  // 使用表單送出
  const forHandleSubmit = (e) => {
    e.preventDefault();
    console.log('使用form submit送出', search);
  }

  // 使用鍵盤事件 => Enter送出
  const enterHandleSubmit = (e) => {
    if (e.key === 'Enter') {
      console.log('使用Enter送出', search)
    }
  }

  return (
    <>
      <div>
        {/* 使用表單送出方式:適用於單一欄位 */}
        <form onSubmit={forHandleSubmit}>
          <div>
            {/* 搜尋1 */}
            <label htmlFor="search1">搜尋1</label>
            <input type="search" id="search1" name="mySearch"
              value={search} onChange={(e) => setsearch(e.target.value)} />
          </div>
        </form>

        {/* 搜尋2 :不使用表單送出*/}
        <div>
          {/* 搜尋2 */}
          <label htmlFor="search2">搜尋1</label>
          <input type="search" id="search2" name="mySearch"
            value={search} onChange={(e) => setsearch(e.target.value)}
            onKeyDown={enterHandleSubmit}
          />
        </div>
      </div>
    </>
  )
}