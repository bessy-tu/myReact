
import { useEffect } from 'react';

import $ from 'jquery';

export default function App() {

  // 建議的寫法
  useEffect(() => {
    // 移入 => mouseover()
    // 移出 => mouseout()
    // 移動 => mousemove()
    // X-Y座標 => pageX-pageY
    // 取得HTML內容 => html()
    // 淡入 => fadeIn()
    // 淡出 => fadeOut()
    // 速度 => 毫秒 => (slow, normal, fast)
    // 尋找指定的名稱 => has()
    // 新增html元素 => append()
    // 取的子元素 => children()

    $('a:has(.tppShow)').mouseover(function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px',
      }).fadeIn('fast');
    }).mouseout(function (e) {
      $('#ttpPanel').remove();
    }).mousemove(function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px',
      });
    })
  }, [])

  return (
    <>
      <h2>ToolTip顯示說明</h2>
      <p>
        Lorem ipsum dolor sit amet,
        <a href="#">
          aconsectetur
          <span className='ttpShow'>aconsectetur內容說明...</span>
        </a>
        adipisicing elit. Maiores, hic iure sequi officia voluptatibus officiis quo culpa ut ipsam facilis voluptatum totam non. Quo fugiat quos blanditiis doloremque. Non culpa doloribus soluta molestias nesciunt nostrum totam dolores itaque velit id vel, natus veritatis, a maxime. Provident iure, sint necessitatibus explicabo corporis neque nulla porro saepe quaerat facilis qui assumenda temporibus est maxime in ratione soluta quae similique veritatis? Qui dicta fuga perferendis, consequuntur repellat necessitatibus perspiciatis. Quas ex enim neque, atque at unde sed nisi iure optio laborum. Illum nemo, laudantium nisi saepe sequi minus neque dolor? Facilis tenetur aut, earum eveniet unde nobis dignissimos, vero quas error esse dolorum porro obcaecati quaerat soluta? Fugiat aspernatur, soluta ipsum dolore excepturi odio? Quisquam facilis sit ratione fugit delectus in a ea, assumenda neque. Corporis earum molestias dolorem nesciunt facere? Repudiandae deleniti vel sequi tenetur assumenda veniam incidunt? Et debitis beatae rerum, quia iste facilis quas aliquam tenetur suscipit. Molestiae similique reiciendis possimus accusantium animi repellendus optio consectetur placeat non nisi dignissimos excepturi modi sapiente iusto, nostrum temporibus obcaecati magnam veniam saepe. Voluptatem tempora harum provident placeat pariatur. Suscipit a deleniti, quisquam, sed aliquid sit error iure laudantium ut labore nobis mollitia perspiciatis consectetur veritatis laboriosam quia ea quas facere laborum. Nam tempora pariatur totam iste impedit doloribus eligendi dicta laborum adipisci. Dignissimos voluptates, nesciunt officiis libero dolores quia! Veritatis eos esse in tempore alias porro voluptates voluptatibus assumenda possimus doloremque dolores exercitationem, quaerat est laudantium corrupti sint aspernatur architecto consequuntur impedit. Iure fugit non soluta beatae repellat explicabo ad optio, excepturi quos perferendis officia a, reprehenderit alias nam ullam vitae quaerat commodi ducimus ex totam, iusto hic necessitatibus ea earum. Quia vel id ipsam voluptatibus eligendi magnam ducimus dicta, voluptas molestias cupiditate voluptates minima facilis illum quo unde consequatur ea quos quidem eveniet minus error vero. Dolor laborum maiores architecto, cupiditate nemo voluptatem sit fugiat quibusdam sunt asperiores labore minus delectus enim id esse alias? Neque nostrum commodi aliquid deleniti sequi porro sit illum eius nisi. Esse aspernatur magni sapiente dolorum iste aliquid nam, sit voluptatem id illo! Dolores quae eveniet iusto vero cum omnis possimus quaerat ducimus voluptatem optio veritatis numquam voluptatum ipsa, molestias exercitationem dolor accusamus quis culpa quia odit voluptatibus hic! Debitis provident numquam iusto dolore accusantium recusandae aliquam in assumenda repellat nesciunt eos dolores non perferendis autem at dignissimos doloremque, unde similique officia molestiae? Veritatis necessitatibus nobis, incidunt excepturi impedit debitis provident aliquam corporis qui aperiam rem officia, dignissimos tempora repellat error nulla itaque temporibus praesentium quos eveniet mollitia! Maiores ad corporis iusto quisquam suscipit, fugiat ipsam aliquam, quo laborum recusandae nulla. Magni placeat, inventore libero maxime aliquam corrupti? Laudantium sit debitis facilis omnis commodi quaerat, impedit natus in molestias, accusamus amet autem reiciendis, voluptatibus eaque mollitia aspernatur? Est quae perferendis nulla ullam magni. Sequi totam error aliquam reprehenderit eum atque obcaecati vero nostrum sed veniam. In illo, placeat deserunt exercitationem minima maxime omnis quis explicabo, quod molestiae voluptatem error, ullam ipsa ut? Quos eaque eveniet aliquid?
      </p>
    </>
  )
}