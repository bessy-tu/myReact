import { useState } from 'react';

import img1 from '/images/03.jpg';
import img2 from '/images/05.jpg';
import img3 from '/images/06.jpg';
import img4 from '/images/07.jpg';



export default function App() {

  // 建立目前縮圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 建立圖片陣列
  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div className="wrapper" >
        <section style={{
          // display: 'flex',
          width: '700px',
          // justifyContent: 'space-around',
          margin: '50px auto',
          textAlign:'center',
          // border:'1px solid gray',
        }}>

          {/* 大圖區 */}
          <div style={{ display: 'flex', }} >
            <img src={arrPhotos[currentImgIndex]} alt="photos" width={580} height={400} />
          </div>

          {/* 縮圖區 */}
          <div style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            marginTop:'20px',
          }}>
            {/* <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> */}

            {
              arrPhotos.map((photo, index) => {
                return (
                  <img key={index} src={photo} alt="photos" width={100} height={80}
                    onMouseOver={e => setCurrentIm(index)}
                    style={{ 
                      cursor: 'pointer',
                      marginRight:'5px',
                     }}
                  />
                )
              })
            }


          </div>



        </section>
      </div>
    </>
  )
}