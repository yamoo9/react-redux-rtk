import { useRef } from 'react';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
// import { addTodo } from 'store/features/todoList';
import { addTodo } from 'store/slices/todoList';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const idRef = useRef(0);

  const handleAddTodo = (e) => {
    const { current: inputNode } = inputRef;
    let value = inputNode.value.trim();
    if (value.length === 0) {
      alert('새로운 Todo 값이 비었습니다.');
      inputNode.focus();
      inputNode.value = '';
      return;
    }

    dispatch(
      addTodo({
        doit: value,
        id: idRef.current++,
      })
    );
    inputNode.value = '';
  };

  return (
    <div className={addTodoStyle}>
      <div className={formStyle}>
        <label className={labelStyle} htmlFor="newTodo">
          새로운 Todo
        </label>
        <input
          className={inputStyle}
          id="newTodo"
          type="text"
          ref={inputRef}
          onKeyPress={(e) => /enter/i.test(e.key) && handleAddTodo()}
        />
      </div>
      <button type="button" className={buttonStyle} onClick={handleAddTodo}>
        Todo 추가
      </button>
    </div>
  );
};

/* styles ------------------------------------------------------------------- */

const addTodoStyle = css`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;

const formStyle = css`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

const labelStyle = css`
  color: #2e2163;
`;
const inputStyle = css`
  padding: 0.8em;
  border-radius: 4px;
  border: 2px solid #c2b8e9;
`;

const buttonStyle = css`
  cursor: pointer;
  margin-bottom: 2px;
  border: none;
  border-radius: 4px;
  padding: 0.6em 1.2em;
  background: #c5bde3;
  box-shadow: 0 2px 2px rgba(111, 100, 156, 0.8);
  color: #2e2163;
  font-weight: 600;
  font-size: 1rem;
`;
