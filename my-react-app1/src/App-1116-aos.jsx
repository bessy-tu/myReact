

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    AOS.init();  //初始化
  }, [])

  return (
    <>
      <h1 data-aos="fade-right">AOS-zoom-im</h1>
      <div className="box" data-aos="fade-up" data-aos-duration="1000">
          <p>data-aos="fade-up"</p>
          <p>data-aos-duration="1000"</p>
      </div>
    </>
  )
}