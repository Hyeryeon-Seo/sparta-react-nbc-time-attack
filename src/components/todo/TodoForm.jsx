import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

// uncontrolled component
const TodoForm = () => {
	const context = useContext(TodoContext);
	const handleSubmit = (e) => {
		e.preventDefault();

		const title = e.target.title.value;
		const content = e.target.content.value;
		const limit = e.target.limit.value;

		if (!title || !content) {
			return;
		}

		context.onSubmitTodo({
			id: crypto.randomUUID(),
			title,
			content,
			limit,
			completed: false,
		});

		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="제목" name="title" />
			<input type="text" placeholder="내용" name="content" />
			<input type="date" name="limit" />
			<button type="submit">제출</button>
		</form>
	);
};

export default TodoForm;
