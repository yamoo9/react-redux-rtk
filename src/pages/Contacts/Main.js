import { css } from '@emotion/css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className={containerStyle}>
      <h1>Contacts</h1>
      <Link to="add" className={addStyle}>
        연락처 추가
      </Link>
      <Outlet />
    </div>
  );
};

export default Main;

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

const addStyle = css`
  text-decoration: none;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid currentColor;
  padding: 0.6em 1.2em;

  &:hover {
    background: #f0e7ff;
  }
`;
