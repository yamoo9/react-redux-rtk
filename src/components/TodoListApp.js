import { useMemo } from 'react';
import { css } from '@emotion/css';
import { useShortcut } from 'hooks/useShortcut';
import { ShowVisibleFilter } from './ShowVisibleFilter';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

export const TodoListApp = () => {
  useShortcut();

  const renderAddTodo = useMemo(() => <AddTodo />, []);
  const renderShowVisibleFilter = useMemo(() => <ShowVisibleFilter />, []);
  const renderTodoList = useMemo(() => <TodoList />, []);

  return (
    <div className={AppStyles}>
      {renderAddTodo}
      {renderShowVisibleFilter}
      {renderTodoList}
    </div>
  );
};

/* styles ------------------------------------------------------------------- */

const AppStyles = css`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  max-width: 480px;
  margin-top: 12px;
`;
