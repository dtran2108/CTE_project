import Divider from '../Divider/Divider';
import Button from '../Button/Button';

import GridItem from './GridItem';
import documents from './static/icon-documents.png';
import practicalClub from './static/practical_club.png';
import talking from './static/talking.png';
import teachers from './static/teachers.png';
import test from './static/test.png';

const OurAdvantages = () => (
  <div>
    <div className="wrapper">
      <h1 style={{ marginBlockEnd: '0' }}>ƯU ĐIỂM CỦA CHÚNG TÔI</h1>
      <p style={{ marginBottom: '1.5vw' }}>
        Tiếng Anh Giao Tiếp, tập trung đào tạo phát âm, từ vựng, ngữ âm, phản 
        xạ giao tiếp
      </p>
      <Divider />
      <div className="grid">
        <GridItem
          image={practicalClub}
          title="Club thực hành"
          content="CTE có môi trường thực hành tiếng Anh năng động và hiệu quả 
          nhất Sài Gòn, học viên sẽ được thực hành mỗi ngày."
        />
        <GridItem
          image={talking}
          title="Cơ hội nói nhiều"
          content="Số lượng học viên trong chỉ từ 6-8 bạn, nên cơ hội giao tiếp nhiều."
        />
        <GridItem
          image={documents}
          title="Giáo trình riêng mỗi lớp"
          content="Giáo án được thiết kế riêng cho mỗi lớp, phù hợp với đối 
          tượng học viên trong lớp."
        />
        <GridItem
          image={teachers}
          title="Đội ngũ Giáo Viên giỏi"
          content="Giáo viên của CTE được tuyển chọn kỹ càng, tiếng Anh giao 
          tiếp rất tốt. Một số bạn còn có IELTS speaking 8.0, 8.5."
        />
        <GridItem
          image={test}
          title="Test đầu vào khác biệt"
          content="Học viên trước khi học được test trực tiếp với Giáo Viên bản ngữ."
        />
        <GridItem
          image={practicalClub}
          title="Bài giảng tối đa nghe nói"
          content="Các bài giảng được thiết kế với thuyết trình, tranh luận, ... 
          nhằm tối đa hóa thời gian nghe nói."
        />
      </div>
      <div style={{margin: '3vw 0 3vw 0'}}>
        <Button name="Đăng ký Test MIỄN PHÍ" />
      </div>
    </div>

    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        background-color: #F9F9F9;
        height: 50vw;
      }

      h1 {
        font-family: Roboto, sans-serif;
        color: #F79E32;
        font-weight: 400;
        font-size: 2.5vw;
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
        grid-template-columns: auto auto auto;
      }
    `}</style>
  </div>
);

export default OurAdvantages;