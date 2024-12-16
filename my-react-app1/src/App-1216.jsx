import $ from 'jquery'
import { useEffect } from 'react';

export default function App() {

  // 寫法一(過時的寫法)
  // useEffect(() => {
  //   $('.cssAnim1').hover(function () {
  //     $(this).addClass('imgScale');
  //   }, function () {
  //     $(this).removeClass('imgScale');
  //   })
  // }, [])

  // 寫法二(建議的寫法)
  useEffect(() => {
    $('.cssAnim1').on('mouseenter', function () {
      $(this).addClass('imgScale');
    });

    $('.cssAnim1').on('mouseout', function () {
      $(this).removeClass('imgScale');
    });
  }, [])


  return (
    <div>
      <a href="#" class="cssAnim1">
        <img src="./images/03.jpg" alt="" />
      </a>
    </div>
  )
}