import { css } from '@emotion/css';
import { useSelector, useDispatch } from 'react-redux';
// import { setVisibilityFilter } from 'store/features/visibilityFiler';
import {
  selectVisibilityFilter,
  setVisibilityFilter,
} from 'store/slices/visibilityFilter';

const linkActionStyle = css`
  cursor: not-allowed;
  padding: 0 0.3em;
  line-height: 1;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: #533dab;
`;

export const FilterLink = ({ filter, children, ...restProps }) => {
  const currentFilter = useSelector(selectVisibilityFilter);
  const dispatch = useDispatch();

  return currentFilter.includes(filter) ? (
    <span className={linkActionStyle}>{children}</span>
  ) : (
    <a
      onClick={(e) => {
        e.preventDefault();
        dispatch(setVisibilityFilter(filter));
      }}
      {...restProps}
    >
      {children}
    </a>
  );
};
