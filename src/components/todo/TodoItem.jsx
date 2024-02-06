import { TodoCardItem } from "../../style/TodoStyle";

const TodoItem = ({ todo, onDeleteTodoItem, onToggleTodoItem }) => {
  const { id, title, content, completed, limit } = todo;

  const formattedlimit = new Date(limit).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <TodoCardItem completed={completed}>
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <time>{formattedlimit}</time>
        <div>
          <button onClick={() => onDeleteTodoItem(id)}>삭제</button>
          <button onClick={() => onToggleTodoItem(id)}>
            {completed ? "취소" : "완료"}
          </button>
        </div>
      </article>
    </TodoCardItem>
  );
};

export default TodoItem;
