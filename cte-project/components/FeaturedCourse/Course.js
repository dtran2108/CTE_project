import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import FlexItem from './FlexItem';

import pic1 from './static/pic1.png';

const Course = () => (
  <div>
    <div className="flex" style={{height: '45vw', margin: '2vw 1vw 2vw 1vw'}}>
      <h1 style={{ marginBlockEnd: '0' }}>KHÓA HỌC NỔI BẬT</h1>
      <p style={{ marginBottom: '1.5vw' }}>
        Tiếng Anh Giao Tiếp, tập trung đào tạo phát âm, từ vựng, ngữ âm, phản 
        xạ giao tiếp
      </p>
      <Divider />
      <div className="grid">
        <FlexItem 
          className="flex" image={pic1}
          title="Tiếng Anh Cho Doanh Nghiệp"
          content="Training một đội ngũ nhân viên có khả năng giao tiếp và sử dụng 
          tiếng Anh thành thạo trong công việc, xây dựng riêng và phù hợp với 
          nhu cầu và đặc thù của từng Doanh Nghiệp."
        />
        <FlexItem 
          className="flex" image={pic1}
          title="Tiếng Anh Cho Doanh Nghiệp"
          content="Training một đội ngũ nhân viên có khả năng giao tiếp và sử dụng 
          tiếng Anh thành thạo trong công việc, xây dựng riêng và phù hợp với 
          nhu cầu và đặc thù của từng Doanh Nghiệp."
        />
        <FlexItem 
          className="flex" image={pic1}
          title="Tiếng Anh Cho Doanh Nghiệp"
          content="Training một đội ngũ nhân viên có khả năng giao tiếp và sử dụng 
          tiếng Anh thành thạo trong công việc, xây dựng riêng và phù hợp với 
          nhu cầu và đặc thù của từng Doanh Nghiệp."
        />
        <FlexItem 
          className="flex" image={pic1}
          title="Tiếng Anh Cho Doanh Nghiệp"
          content="Training một đội ngũ nhân viên có khả năng giao tiếp và sử dụng 
          tiếng Anh thành thạo trong công việc, xây dựng riêng và phù hợp với 
          nhu cầu và đặc thù của từng Doanh Nghiệp."
        />
      </div>
      <div style={{margin: '3vw 0 3vw 0'}}>
        <Button name="Đăng ký Test MIỄN PHÍ" />
      </div>
    </div>

    <style jsx>{`
      .flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      h1 {
        font-family: Roboto, sans-serif;
        color: #F79E32;
        font-weight: 400;
        font-size: 2.5vw;
      }

      h2 {
        font-family: Roboto, sans-serif;
        color: #F79E32;
        font-weight: 300;
        font-size: 1.2vw;
        text-align: center;
        width: 100%;
      }

      p {
        font-family: Roboto, sans-serif;
        color: #8C8989;
        font-weight: 200;
        font-size: 1vw;
        text-align: center;
      }

      .grid {
        display: grid;
        width: 100vw;
        grid-template-columns: auto auto auto auto;
      }
    `}</style>
  </div>
);

export default Course;