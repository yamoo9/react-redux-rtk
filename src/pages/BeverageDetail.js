import { css } from '@emotion/css';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useBeverageItem } from 'store/slices/beverageList';
import { BeverageItem, Spinner } from 'components';

function BeverageDetail() {
  const { id } = useParams();
  const { loading, item } = useBeverageItem(id);

  if (loading || !item) {
    return <Spinner>음료를 로드 중입니다...</Spinner>;
  }

  let beverageName = item.figure.name.replace?.(/-/g, ' ');

  return (
    <>
      <Helmet>
        <title>{beverageName}</title>
      </Helmet>
      <div className={containerStyle}>
        <h1>{beverageName}</h1>
        <BeverageItem item={item} />
      </div>
    </>
  );
}

export default BeverageDetail;

/* styles ------------------------------------------------------------------- */

const containerStyle = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  h1 {
    color: #9188b6;
  }
`;
