import  { Helmet } from 'react-helmet-async';
import { TodoListApp } from 'components';
import { css } from '@emotion/css';

function TodoList() {
  return (
    <>
    <Helmet>
      <title>할 일 목록 (Todo List)</title>
    </Helmet>
    <div className={todoListPageStyle}>
      <h1 lang="en">Todo List</h1>
      <TodoListApp />
    </div>
    </>
  );
}

export default TodoList;

/* styles ------------------------------------------------------------------- */

const todoListPageStyle = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  h1 {
    color: #9188b6;
  }
`;
