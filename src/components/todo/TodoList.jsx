import TodoItem from "./TodoItem";

const TodoList = ({ headTitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <section>
      <h2>{headTitle}</h2>
      <ul>
        {
          // SECTION: 1번 문제
          // TODO: 투두 리스트 렌더링
          // NOTE: map 메서드를 사용하여 `TodoItem` 컴포넌트 렌더링
          // HINT: `TodoItem` 컴포넌트에는 `todo`, `onDeleteTodoItem`, `onToggleTodoItem` props를 전달
        }
      </ul>
    </section>
  );
};

export default TodoList;
