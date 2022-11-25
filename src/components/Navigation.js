import { css } from '@emotion/css';
import { NavLink, useLocation } from 'react-router-dom';

export function Navigation({ navigationList }) {
  const { pathname } = useLocation();

  return (
    <nav lang="en">
      <ul>
        {navigationList?.map(({ id, to, text }) => (
          <li key={id}>
            <NavLink
              to={to}
              className={({ isActive }) => {
                let key = 'beverage';
                let isItem = to.includes(key) && pathname.includes(key);
                return `${linkStyle} ${
                  isActive || isItem ? activeStyle : ''
                }`.trim();
              }}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* styles ------------------------------------------------------------------- */

const linkStyle = css`
  color: #9188b6;
  text-decoration: none;
  &:hover {
    color: #3e375b;
  }
`;

const activeStyle = css`
  color: #0e0b18;
  &:hover {
    color: inherit;
  }
`;
