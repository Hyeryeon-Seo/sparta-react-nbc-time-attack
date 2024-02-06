import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { defaultTodos } from "../../static/todos";
import { TodoContext } from "../../context/TodoContext";

const TodoController = () => {
	const [todos, setTodos] = useState(defaultTodos);
	const [sortOrder, setSortOrder] = useState("asc");

	const onSubmitTodo = (nextTodo) => {
		setTodos((prevTodos) => [nextTodo, ...prevTodos]);
	};

	const onDeleteTodoItem = (id) => {
		// SECTION: 2-1번 문제
		// TODO: 투두 리스트 삭제
		// NOTE: filter 메서드를 사용하여 삭제할 아이템을 제외한 나머지 아이템만 반환 후 setTodos로 업데이트
		// HINT: `id`와 `todo.id`가 일치하지 않는 아이템만 반환
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const onToggleTodoItem = (id) => {
		// SECTION: 2-2번 문제
		// TODO: 투두 리스트 completed(완료) 상태를 토글
		// NOTE: map 메서드를 사용하여 특정 아이템의 completed 상태를 토글 후 setTodos로 업데이트
		// HINT: `id`와 `todo.id`가 일치하는 아이템의 completed 상태를 토글
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				// 삼항연산자 적용X -
				//todo.id === id ? { ...todo, completed: !todo.completed } : todo;
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	};

	const onChangeSortOrder = (e) => {
		const nextSortOrder = e.target.value;
		setSortOrder(nextSortOrder);
	};

	useEffect(() => {
		const newOrderListbyLimit = [...todos].sort((a, b) => {
			if (sortOrder === "asc") {
				// SECTION: 3-1번 문제
				// TODO: 투두 리스트 오름차순 정렬
				// NOTE: sort 메서드를 사용하여 `limit`을 기준으로 오름차순 정렬 후 setTodos로 업데이트
				// HINT: `new Date(todo.limit)`을 사용하여 정렬
				return new Date(a.limit) - new Date(b.limit);
			} else {
				// SECTION: 3-2번 문제
				// TODO: 투두 리스트 내림차순 정렬
				// NOTE: sort 메서드를 사용하여 `limit`을 기준으로 내림차순 정렬 후 setTodos로 업데이트
				// HINT: `new Date(todo.limit)`을 사용하여 정렬
				return new Date(b.limit) - new Date(a.limit);
			}
		});
		setTodos(newOrderListbyLimit);
	}, [sortOrder]);

	const workingTodos = todos.filter((todo) => !todo.completed);
	const doneTodos = todos.filter((todo) => todo.completed);

	return (
		<TodoContext.Provider
			value={{
				onSubmitTodo,
				onDeleteTodoItem,
				onToggleTodoItem,
			}}
		>
			<main>
				<TodoForm />
				<div>
					<select onChange={onChangeSortOrder} value={sortOrder}>
						<option value="asc">오름차순</option>
						<option value="desc">내림차순</option>
					</select>
				</div>
				<TodoList headTitle="Working!" todos={workingTodos} />
				<TodoList headTitle="Done!" todos={doneTodos} />
			</main>
		</TodoContext.Provider>
	);
};

export default TodoController;
