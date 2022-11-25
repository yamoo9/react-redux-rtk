import { css } from '@emotion/css';
import { Helmet } from 'react-helmet-async';
import { BeverageSearch, BeverageList } from 'components';

function BeverageListPage() {
  return (
    <>
      <Helmet>
        <title>음료 목록 (Beverage List)</title>
      </Helmet>
      <div className={containerStyle}>
        <h1 lang="en">Beverage List</h1>
        <BeverageSearch />
        <BeverageList />
      </div>
    </>
  );
}

export default BeverageListPage;

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
