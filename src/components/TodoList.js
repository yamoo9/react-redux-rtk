import { css } from '@emotion/css';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as CheckOn } from 'assets/checkOn.svg';
import { ReactComponent as CheckOff } from 'assets/checkOff.svg';
// import {
//   showAll,
//   showActived,
//   showCompleted,
// } from 'store/features/visibilityFiler';
import {
  showAll,
  showActived,
  showCompleted,
  selectVisibilityFilter,
} from 'store/slices/visibilityFilter';
import { selectTodoList, toggleTodo } from 'store/slices/todoList';

const filterTodoList = (todoList, filter) => {
  switch (filter) {
    default:
    case showAll.type:
      return todoList;
    case showActived.type:
      return todoList.filter((todo) => !todo.completed);
    case showCompleted.type:
      return todoList.filter((todo) => todo.completed);
  }
};

export const TodoList = () => {
  const todos = useSelector(selectTodoList);
  const filter = useSelector(selectVisibilityFilter);

  const dispatch = useDispatch();

  return (
    <ul className={todoListStyle}>
      {filterTodoList(todos, filter).map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : null,
          }}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          <button
            type="button"
            className={buttonStyle}
            title={todo.completed ? '미완료 상태로 전환' : '완료 상태로 전환'}
          >
            {todo.completed ? (
              <CheckOn title="미완료 상태로 전환" />
            ) : (
              <CheckOff title="완료 상태로 전환" />
            )}
          </button>
          {todo.doit}
        </li>
      ))}
    </ul>
  );
};

/* styles ------------------------------------------------------------------- */

const todoListStyle = css`
  display: flex;
  flex-flow: column;
  gap: 4px;
  list-style: none;
  padding-left: 0;

  & li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #2e2163;
  }
`;

const buttonStyle = css`
  cursor: pointer;
  line-height: 1;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;

  & svg {
    fill: currentColor;
  }
`;
