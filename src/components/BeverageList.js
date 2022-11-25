import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useBeverageList } from 'store/slices/beverageList';
import { Spinner } from './Spinner';

export function BeverageList() {
  const { loading, list } = useBeverageList();

  if (loading) {
    return <Spinner>음료 데이터를 로드 중입니다...</Spinner>;
  }

  return (
    list && (
      <ul className={listStyle}>
        {list.map?.((item) => (
          <li key={item.id}>
            <Link to={`/beverage/${item.id}`}>
              <figure>
                <img src={item.figure.src} alt="" width={120} />
                <figcaption>{item.figure.name.replace(/-/g, ' ')}</figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}

/* styles ------------------------------------------------------------------- */

const listStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 60px 0 0;
  padding-left: 0;
  list-style: none;

  a {
    color: #9188b6;
    text-decoration: none;
    &:hover {
      color: #3e365e;
    }
  }

  figure {
    margin: 0;
    display: flex;
    flex-flow: column;
    gap: 8px;
    justify-content: space-between;
    min-height: 100px;
  }

  img {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

  figcaption {
    text-align: center;
    font-size: 14px;
  }
`;
