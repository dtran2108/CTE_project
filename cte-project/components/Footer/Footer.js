import Link from 'next/link';
import logo from './static/logo-cte.png';
import facebook from './static/FB.png';
import twitter from './static/twitter.png';
import youtube from './static/youtube.png';

const Footer = () => (
  <div>
    <div className="wrapper">
      <div className="info">
        <div style={{ width: '15vw', height: 'auto', marginBottom: '2vw' }}>
          <img src={logo} width="100%" height="100%" />
        </div>
        <p style={{ marginBottom: '2vw' }}>
          Coffee Talk English - Hệ thống thực hành tiếng Anh giao tiếp toàn 
          diện cùng với người bản ngữ.
        </p>
        <div className="link-wrapper">
          <Link href="facebook.com" style={{ cursor: 'pointer'}}>
            <img src={facebook} width="20vw" height="auto" />
          </Link>
          <Link href="facebook.com" style={{ cursor: 'pointer'}}>
            <img src={twitter} width="37vw" height="auto" />
          </Link>
          <Link href="facebook.com" style={{ cursor: 'pointer'}}>
            <img src={youtube} width="40vw" height="auto" />
          </Link>
        </div>
        <p>
          CS1: CTE Bình Thạnh - <br/>
          168 Võ Oanh, F.25 Q. Bình Thạnh
        </p>
        <p>
          CS2: CTE Bình Thạnh - <br/>
          168 Võ Oanh, F.25 Q. Bình Thạnh
        </p>
      </div>
      <div style={{paddingTop: '5vw'}}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=490895388421995"
          width="340" height="500" style={{border:'none',overflow:'hidden'}}
          scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media">
        </iframe>
      </div>
      <div style={{paddingTop: '5vw'}}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=490895388421995"
          width="340" height="500" style={{border:'none',overflow:'hidden'}}
          scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media">
        </iframe>
      </div>
    </div>

    <style jsx>{`
      .wrapper {
        display: grid;
        grid-template-columns: 40vw 25vw 25vw;
        width: 100vw;
        background-color: #EEEEEE;
        height: 35vw;
        padding-left: 5vw;
      }

      .info {
        display: flex;
        padding-left: 3vw;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align:justify;
        width: 55%;
      }

      .link-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        margin-bottom: 1vw;
      }

      p {
        font-family: Roboto, sans-serif;
        font-size: 1vw;
        font-weight: 200;
        color: #8C8989
      }
    `}</style>
  </div>
);

export default Footer;