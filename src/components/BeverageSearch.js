import { css } from '@emotion/css';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { fetchSearchBeverage } from 'store/slices/beverageList';

export function BeverageSearch() {
  const dispatch = useDispatch();

  const handleChange = debounce((e) => {
    let searchText = e.target.value;
    dispatch(fetchSearchBeverage(searchText));
  }, 300);

  return (
    <form className={formStyle}>
      <div className="search">
        <label htmlFor="search">음료 이름</label>
        <input
          type="search"
          id="search"
          placeholder="음료 이름을 검색하세요."
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

const formStyle = css`
  label {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    white-space: nowrap;
  }

  input {
    border-radius: 50px;
    border: 4px solid #d4d0e4;
    padding: 0.6em 1.2em;
    font-size: 16px;

    &:hover {
      border-color: #b8b1d2;
    }

    &:focus-visible {
      outline: none;
      border-color: #9188b6;
    }
  }
`;
