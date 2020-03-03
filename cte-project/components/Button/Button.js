import Link from 'next/link';

const Button = ({name}) => (
  <div>
    <Link href="/">
      <div className="button">
        <span className="text">{name}</span>
      </div>
    </Link>

    <style jsx>{`
      .button {
        width: 15vw;
        height: 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F79E32;
        cursor: pointer;
        border-radius: 5px;
      }

      .text {
        color: #FFFFFF;
        font-family: Roboto, sans-serif;
        text-decoration: none;
        font-weight:100;
        font-size: 1vw;
      }
    `}</style>
  </div>
);

export default Button;