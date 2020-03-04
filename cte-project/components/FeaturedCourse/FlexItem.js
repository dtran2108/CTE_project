const FlexItem = ({image, title, content}) => (
  <div style={{ padding: '0 3vw 0 3vw' }}>
    <div className="wrapper">
      <div className="img-wrapper">
        <img src={image} width="100%" height="100%" />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>

    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .img-wrapper {
        width: 15vw;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
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
    `}</style>
  </div>
);

export default FlexItem;