const GridItem = ({image, title, content}) => (
  <div style={{ padding: '1vw 4vw 2vw 4vw' }}>
    <div className="wrapper">
      <div className="inner-flex">
        <div className="image-wrapper">
          <img src={image} width="100%" height="100%" />
        </div>
        <h2>{title}</h2>
      </div>
      <p>{content}</p>
    </div>

    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0 1vw 0 1vw
      }

      .inner-flex {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .image-wrapper {
        width: 3vw;
        height: auto;
        margin-right: 1vw;
      }

      h2 {
        font-family: Roboto, sans-serif;
        color: #F79E32;
        font-weight: 300;
        font-size: 1.2vw;
        text-align: left;
        width: 100%;
      }

      p {
        font-family: Roboto, sans-serif;
        font-weight: 200;
        color: #8C8989;
        font-size: 1vw;
        text-align: justify;
      }
    `}</style>
  </div>
);

export default GridItem;