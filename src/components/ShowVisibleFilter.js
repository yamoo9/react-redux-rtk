import { css } from '@emotion/css';
import { FilterLink } from './FilterLink';
// import {
//   showAll,
//   showActived,
//   showCompleted,
// } from 'store/features/visibilityFiler';
import {
  showAll,
  showActived,
  showCompleted,
} from 'store/slices/visibilityFilter';

export const ShowVisibleFilter = () => {
  return (
    <span className={filterStyle}>
      <FilterLink href="#all" filter={showAll.type}>
        모두
      </FilterLink>{' '}
      /{' '}
      <FilterLink href="#actived" filter={showActived.type}>
        활성 상태만
      </FilterLink>{' '}
      /{' '}
      <FilterLink href="#completed" filter={showCompleted.type}>
        완료된 상태만
      </FilterLink>{' '}
      보기
      <br />
      <span className={shortcutStyle}>
        단축키: <code>ctrl + 1, 2, 3</code>
      </span>
    </span>
  );
};

/* styles ------------------------------------------------------------------- */

const filterStyle = css`
  font-size: 0.875rem;
  line-height: 1.7;

  & a {
    padding: 0 0.3em;
    line-height: 1;
    color: #2e2163;
    text-decoration: none;
  }
`;

const shortcutStyle = css`
  padding: 0 0.3em;

  & code {
    letter-spacing: -1px;
    line-height: 1;
    border-radius: 50px;
    padding: 0.1em 0.5em;
    background: #d7d2f0;
    color: #533dab;
  }
`;
