import Head from 'next/head';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';

import pic1_block3 from '../public/static/pic1_block3.png';

const Home = () => (
  <div className="container">
    <Head>
      <title>CTE</title>
    </Head>

    <main>
      <Header />
      <div className="block3">
        <div style={{width: '40%', height: '20vw'}}>
          <img src={pic1_block3} width="100%" height="100%"/>
        </div>
        <div className="block3_item2">
          <h1 className="block3_item2_header">VỀ COFFEE TALK ENGLISH</h1>
          <p className="block3_item2_paragraph">
            <strong>Coffee Talk English</strong> là trung tâm tiếng Anh chuyên Tiếng Anh Giao Tiếp, 
            tập trung đào tạo phát âm, từ vựng, ngữ âm, phản xạ giao tiếp.<br />
            <br />
            Với tầm nhìn <strong>"thay đổi tư duy giới trẻ VN bằng việc đưa văn hóa và 
            ngôn ngữ phương tây đến gần hơn với các bạn trẻ."</strong>, ngoài các buổi học 
            trên lớp, Coffee Talk English tổ chức các hoạt động FREE cho học viên 
            của mình như: chơi board games (Play Board Games), trao đổi ngôn ngữ 
            và văn hóa (Language and culture  Exchange), tranh luận (Debate)... để 
            giúp các bạn có cơ hội tiếp xúc, giao lưu, vui chơi, học tập với người 
            nước ngoài.
          </p>
          <Button name="Tìm hiểu thêm"/>
        </div>
      </div>
    </main>

    <style jsx>{`
      .block3 {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 27vw;
        background-color: #F9F9F9;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
      }

      .block3_item2 {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 0 2vw 0 5vw;
      }

      .block3_item2_header {
        text-align: center;
        font-family: Roboto, sans-serif;
        color: #F79E32;
        font-size: 2vw;
        font-style: normal;
        font-weight: 100;
      }

      .block3_item2_paragraph {
        font-family: Roboto, sans-serif;
        font-size: 1vw;
        color: #8C8989;
        line-height: 1.3vw;
        text-align: justify;
        margin-bottom: 2vw;
      }
    `}</style>

  </div>
)

export default Home
