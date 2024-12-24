import { useEffect, useState } from "react"

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function App() {
  // 建立目前背景圖的變數
  const [currentImgIndex, srtcurrentImgIndex] = useState(0);

  // 建立輪播圖片的陣列物件
  const slides = [
    { url: "./images/02.jpg", title: "photo-1" },
    { url: "./images/05.jpg", title: "photo-2" },
    { url: "./images/06.jpg", title: "photo-3" },
    { url: "./images/07.jpg", title: "photo-4" },
  ]

  // 當currentImgIndex改變時，會觸發useEffect
  useEffect(() => {
    // 每3秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [currentImgIndex])

  // 下一張
  const nextSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // 是 => 回到第一張
    // 否 => 跳到下一張
    srtcurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  // 上一張
  const prevSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // 是 => 跳到最後一張
    // 否 => 跳到前一張
    srtcurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // 建立左右icon
  const Arrow = ({ dirdection, onClick }) => (
    // 擺放icon的區域
    <div style={{
      position: "absolute",
      top: "50%",
      cursor: "pointer",
      color: "white",
      [dirdection]: "30px",  //將icon拆開，並且調整左右留白間距
    }}>
      {
        dirdection === "left" ? (
          <FaRegArrowAltCircleLeft size={50} onClick={onClick} />
        ) : (<FaRegArrowAltCircleRight size={50} onClick={onClick} />)
      }
    </div>
  )

  return (
    <>
      {/* 滿版最外層 */}
      <div className="wrapper" style={{
        // border: "1px solid gray",
        maxWidth: "100vw",
        height: "100vh",
        margin: "auto",
      }}>

        {/* 滿版背景輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[currentImgIndex].url})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          margin: "auto",
        }}>
          <h2 style={{ color: 'red' }}>{slides[currentImgIndex].title}</h2>
          {/* 上一張 */}
          <Arrow dirdection="left" onClick={prevSlide} />
          {/* 下一張 */}
          <Arrow dirdection="right" onClick={nextSlide} />
        </div>
      </div>

    </>
  )
}