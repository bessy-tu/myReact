import { useState, useMemo } from "react";

export default function App() {

  const prodData = [
    {
      id: 1,
      title: '蘋果汁',
      price: 80,
      imgUrl:'./images/01.jpg',

    },
    {
      id: 2,
      title: '蛋黃酥',
      price: 100,
      imgUrl:'./images/03.jpg',

    },
    {
      id: 3,
      title: '飯糰',
      price: 50,
      imgUrl:'./images/05.jpg',
    },
    {
      id: 4,
      title: '牛舌餅',
      price: 120,
      imgUrl:'./images/07.jpg',
    },
    {
      id: 5,
      title: '奶茶',
      price: 160,
      imgUrl:'./images/08.jpg',
    },
  ];

  // 建立表格元件
  const ProdTable = (filterProds) => {
    return (
      <table style={{ width: '500px', marginTop: '20px', }}>
        <tbody>
          {
            filterProds.map((prod) => {
              return (
                <tr key={prod.id} >
                  <td style={{
                    borderBottom: '1px dashed #ccc',
                    padding: '5px',
                    width: '300px',
                  }}></td>
                  <td>
                    <img src={prod.imgUrl} alt="" style={{
                      width: '100px',
                      verticalAlign: 'top',
                    }} /><br/>
                    {prod.title}
                  </td>
                  <td style={{
                    borderBottom: '1px dashed #ccc',
                    padding: '5px',
                    width: '200px',
                    textAlign: 'right',
                  }}>{prod.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  // 陣列變數，預設為元商品陣列的資料
  const [prods, setProds] = useState(prodData);
  // 排序變數，預設為遞增
  const [ascending, setascending] = useState(true);
  // 搜尋變數
  const [search, setSearch] = useState('');

  // 建立排序與搜尋的函式
  const filterProds = useMemo(() => {
    return [...prods]
      .sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
      })
      .filter((prod) => {
        return prod.title.match(search);
      })

  }, [ascending, search]);

  return (
    <>
      <h1>useMemo搜尋與排序</h1>
      <hr style={{ marginBottom: "20px" }} />
      升降冪 :
      <input
        type="checkbox"
        checked={ascending}
        onChange={(e) => setascending(e.target.checked)}
      />
      <br />
      搜尋 :
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 呼叫表格元件 */}
      <ProdTable filterProds={filterProds} />

    </>
  )
}