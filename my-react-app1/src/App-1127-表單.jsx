import { useEffect, useState } from "react"

function App() {
  // 使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊");

  // 縣市名
  const [selCity, setselCity] = useState("");
  // 建立陣列
  const city = ['台北市', '桃園市', '新北市', '台中市', '台南市', '高雄市'];

  // 閱讀確認
  const [check, setCheck] = useState(false);

  // 複選:多個核取方塊
  const [chkList, setChkList] = useState([]);
  const arrList = ['HTML', 'CSS', 'JS'];

  //  建立函式處理被勾選的項目
  const handdleChkList = (e) => {
    // console.log(e.target.value)
    // 使用其餘運算子保留已經被勾選的項目+目前被勾選的項目
    //  減查是否被勾選
    if (e.target.checked) {
      // 是 => 原本+新的
      setChkList([...chkList, e.target.value]);
    } else {
      // 否 => 從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chkList.filter((list) => {
          return list !== e.target.value
        })
      );
    }
  }

  // 選項按鈕
  const [q1Ans, setQ1Ans] = useState('');
  const [q2Ans, setQ2Ans] = useState('');

  // 統計次數
  const [ans1Count, setAns1Count] = useState(0);
  const [ans2Count, setAns2Count] = useState(0);
  const [ans3Count, setAns3Count] = useState(0);

  // useEffect(()=>{
  //   const btn1=document.getElementById('btn1');
  //   btn1.addEventListener('click',totCount);

  //   function totCount(){
      
  //   }
  // },[])

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input標籤 */}
      <label htmlFor="username">使用者名稱:</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          // console.log(`更改前:${inputUserName}`);
          setInputUserName(e.target.value);
          // console.log(`更改後:${inputUserName}`);
        }}
      />{inputUserName}
      <br />
      {/* select */}
      <label htmlFor="city">縣市名</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setselCity(e.target.value);
        }}
      >
        {/* 逐行寫法 */}
        {/* 
        <option value="台北市">台北市</option>
        <option value="桃園市">桃園市</option>
        <option value="新北市">新北市</option>
        <option value="台中市">台中市</option>
        <option value="台南市">台南市</option>
        <option value="高雄市">高雄市</option> 
        */}

        {/* 讀取陣列寫法 */}
        {/* disabled => 無法使用(失能/失效) */}
        <option value="" disabled>請選擇</option>
        {
          city.map((c) => {
            return <option value={c} key={c}>{c}</option>
          })
        }
      </select>{selCity}
      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheak">閱讀確認</label>
      <input type="checkbox" id="isCheak"
        value={check}
        onChange={(e) => {
          // 處理勾選值的變化
          setCheck(e.target.checked);
        }} />{check.toString()}
      <br />

      {/* 複選:多個核取方塊 */}
      {
        arrList.map((list) => {
          return <div key={list}>
            <input type="checkbox" name="like" id={list}
              value={list}
              onChange={handdleChkList}
            />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }

      {/* 
      <input type="checkbox" id="chkList1" name="like" value="HTML" onChange={handdleChkList} />
      <label htmlFor="checkList1">HTML</label>

      <input type="checkbox" id="chkList2" name="like" value="CSS" onChange={handdleChkList} />
      <label htmlFor="checkList2">CSS</label>

      <input type="checkbox" id="chkList3" name="like" value="JS" onChange={handdleChkList} />
      <label htmlFor="checkList3">JS</label> 
      */}
      <br />
      {chkList}

      <br />
      {/* 選項按鈕 */}
      1.請選則最愛的飲料:
      <input type="radio" name="Q1" value="美式咖啡" id="q1-1" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-1">美式咖啡</label>

      <input type="radio" name="Q1" value="拿鐵咖啡" id="q1-2" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-2">拿鐵咖啡</label>

      <input type="radio" name="Q1" value="紅茶" id="q1-3" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-3">紅茶</label>

      <br />
      您選則的飲料是:{q1Ans}

      <br />
      2.請選則最不喜歡的食物:
      <input type="radio" name="Q2" value="苦瓜" id="Q2-1" onChange={(e) => {
        setQ2Ans(e.target.value)
      }} />
      <label htmlFor="Q2-1">苦瓜</label>

      <input type="radio" name="Q2" value="紅蘿蔔" id="Q2-2" onChange={(e) => {
        setQ2Ans(e.target.value);
      }} />
      <label htmlFor="Q2-2">紅蘿蔔</label>

      <input type="radio" name="Q2" value="薑" id="Q2-3" onChange={(e) => {
        setQ2Ans(e.target.value);
      }} />
      <label htmlFor="Q2-3">薑</label>

      <br />
      您選擇的食物是:{q2Ans}
      <br />
      <button onClick={() => {

        // 將所有次數歸零
        // setAns1Count(0);
        // setAns2Count(0);
        // setAns3Count(0);

        // 統計次數
        // if(q1Ans=='美式咖啡'||q2Ans=='苦瓜'){
        //   setAns1Count(ans1Count+1);
        // } else if (q1Ans=='拿鐵咖啡'||q2Ans=='紅蘿蔔'){
        //   setAns2Count(ans2Count+1);
        // } else if (q1Ans=='紅茶'||q2Ans=='薑'){
        //   setAns3Count(q1)
        // }


        // 統計次數
        const q1_1 = document.getElementById('q1-1');
        if (q1_1.checked) {
          setAns1Count(ans1Count + 1);
        }
        const q1_2 = document.getElementById('q1-2');
        if (q1_2.checked) {
          setAns1Count(ans2Count + 1);
        }
        const q1_3 = document.getElementById('q1-3');
        if (q1_3.checked) {
          setAns1Count(ans3Count + 1);
        }

        // 第二題
        const Q2_1 = document.getElementById('Q2-1');
        if (Q2_1.checked) {
          setAns1Count(ans1Count + 1);
        }
        const Q2_2 = document.getElementById('Q2-2');
        if (Q2_2.checked) {
          setAns2Count(ans2Count + 1);
        }
        const Q2_3 = document.getElementById('Q2-3');
        if (Q2_3.checked) {
          setAns3Count(ans3Count + 1);
        }

      }}>送出統計結果</button>

      <p>顯示統計次數結果:</p>
      <p>選項1次數{ans1Count}</p>
      <p>選項2次數{ans2Count}</p>
      <p>選項3次數{ans3Count}</p>

    </>
  )
}
export default App