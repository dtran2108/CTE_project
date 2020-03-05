import Button from '../Button/Button';
import group from './static/Group.png';

const Reward = () => (
  <div>
    <div className="wrapper">
      <div style={{width: '50vw', height: 'auto', margin: '0 5vw 0 0'}}>
        <img src={group} width="100%" height="100%"/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justify: 'center', alignItems: 'center', paddingRight: '6vw'}}>
        <h1>ĐĂNG KÝ NHẬN ƯU ĐÃI</h1>
        <input type="text" placeholder="Họ và tên"/>
        <input type="number" placeholder="Số người đăng ký tham gia"/>
        <input type="number" placeholder="Số điện thoại"/>
        <input type="email" placeholder="Email"/>
        <div style={{marginTop: '1vw'}}>
          <Button name="Đăng ký Test MIỄN PHÍ" />
        </div>
      </div>
    </div>

    <style jsx>{`
      .wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 2vw 3vw 2vw 3vw;
        background-color: #F9F9F9;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        height: 35vw;
      }
      
      h1 {
        font-family: Roboto, sans-serif;
        color: #F79E32;
        font-weight: 300;
        font-size: 2.5vw;
        margin-bottom: 3vw;
      }

      input {
        width: 100%;
        height: 3vw;
        background-color: #EEEEEE;
        border-radius: 3px;
        box-sizing: border-box;
        border: 3px solid #EEEEEE;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        outline: none;
        margin-bottom: 1vw;
      }

      input:focus {
        border: 3px solid #F79E32;
      }

      ::placeholder {
        font-size: 1vw;
        padding: 0 0 0 1vw;
      }
      
      :-ms-input-placeholder {
        font-size: 1vw;
        padding: 0 0 0 1vw;
      }
      
      ::-ms-input-placeholder {
        font-size: 1vw;
        padding: 0 0 0 1vw;
      }

      textarea {
        padding: 0 0 0 1vw;
      }
    `}</style>
  </div>
);

export default Reward;