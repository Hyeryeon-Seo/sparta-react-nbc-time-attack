import React from "react";
import { createContext } from "react";

export const TodoContext = createContext();

// SECTION: 4번 문제
// TODO: TodoProvider 컴포넌트 작성
// NOTE: `TodoContext.Provider` 컴포넌트로 `props.children`을 감싸서 반환
// HINT: `props`로 `value`를 전달

const TodoProvider = ({ children }) => {
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
				// // 삼항연산자 적용X -
				//todo.id === id ? { ...todo, completed: !todo.completed } : todo;
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	};

	return (
		<TodoContext.Provider
			value={{ onSubmitTodo, onDeleteTodoItem, onToggleTodoItem }}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
