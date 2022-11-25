import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as GoBackIcon } from 'assets/arrowLeftCircleFill.svg';

export function BeverageItem({ item }) {
  const { figure, detail } = item;
  const navigate = useNavigate();

  return (
    <figure className={figureStyle}>
      <img src={figure.src} alt="" height={figure.height} />
      <figcaption>
        <strong>{detail.en}</strong>
        <p>{detail.desc}</p>
      </figcaption>
      <button onClick={() => navigate(-1)} aria-label="이전 페이지 이동" title="이전 페이지 이동">
        <GoBackIcon />
      </button>
    </figure>
  );
}

/* styles ------------------------------------------------------------------- */

const figureStyle = css`
  width: 320px;
  margin: 0;
  text-align: center;
  color: #9188b6;

  img {
    margin-bottom: 18px;
  }
  strong {
    display: inline-block;
    font-size: 18px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid currentColor;
  }

  p {
    margin: 0;
    line-height: 1.5;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    margin: 20px 0;
    border: 0;
    padding: 0;
    background: transparent;
    color: #9188b6;

    &:hover {
      color: #7c749c;
    }

    &:focus-visible {
      outline: none;
      color: #595371;
    }

    svg {
      fill: currentColor;
    }
  }
`;
