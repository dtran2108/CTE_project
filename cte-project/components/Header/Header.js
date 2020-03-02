import Link from 'next/link';

const HeaderStyle = {
  backgroundColor: '#F79E32',
  maxWidth: '100vw',
  height: '6vw',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 4vw 0px 2vw',
}

const ItemGroup = {
  display: 'flex',
  alignItems: 'center',
  alignItems: 'center',
  height: 'inherit',
}

const Header = () => (
  <div style={HeaderStyle}>
    <div style={ItemGroup}>
      <div style={{width: '12vw', height: '5vw'}}>
        <img src={require('./static/logo-cte.png')} width="100%" height="100%"/>
      </div>
      <div className="text-style">Về CoffeeTalkEnglish</div>
      <div className="text-style">Học viên tiêu biểu</div>
      <div className="text-style">Khoá học</div>
      <div className="text-style">Club thực hành</div>
      <div className="text-style">Blog</div>
      <div className="text-style">Tuyển dụng</div>
      <div className="text-style">Liên hệ</div>
    </div>
    <div style={ItemGroup}>
      <div style={{marginRight: '4vw', width: '1.5vw', height: '2.3vw'}}>
        <img src={require('./static/facebook.png')} width="100%" height="100%"/>
      </div>
      <div style={{width: '2.7vw', height: '2.3vw'}}>
        <img src={require('./static/twitter.png')} width="100%" height="100%"/>
      </div>
    </div>

    <style jsx>{`
      .text-style {
        font-family: Roboto, sans-serif;
        font-size: 1vw;
        color: #FFFFFF;
        margin-left: 1.6vw;
        height: inherit;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0px 10px 0px 10px;
      }

      .text-style:hover {
        background-color: rgba(229, 229, 229, 0.5);    
      }
    `}</style>
  </div>
);

export default Header;