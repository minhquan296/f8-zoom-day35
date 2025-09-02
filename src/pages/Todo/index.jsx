import { useState } from "react";

const Todo = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handleAddTodo = () => {
		if (!todo) return alert("Bạn chưa nhập gì mà!!!");
		setTodos((preTodos) => [...preTodos, { id: Math.random(), title: todo, isCompleted: false }]);
		setTodo("");
	};

	const handleDeleteTodo = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	const checkIsCompleted = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
				return todo;
			});
		});
	};

	const completedTodo = () => {
		const completedTodo = todos.filter((todo) => todo.isCompleted);
		return completedTodo.length;
	};

	const remainTodo = () => {
		const remainTodo = todos.length - completedTodo();
		return remainTodo;
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="container h-[350px] p-8 overflow-y-auto">
				<h1 className="font-bold text-4xl">Todo App</h1>
				<div className="flex gap-2 mt-4">
					<input
						type="text"
						name=""
						id=""
						placeholder="Add your new todo"
						className="border px-2 py-1 w-full"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<button className="bg-green-400 px-2 py-1 font-bold text-xl cursor-pointer" onClick={handleAddTodo}>
						Add
					</button>
				</div>
				{todos.length ? (
					<div className="mt-4 flex flex-col gap-3">
						{todos.map((todo) => (
							<div key={todo.id} className="flex items-center justify-between bg-gray-300 p-2 rounded ">
								<div className={`${todo.isCompleted && "line-through"} flex items-center gap-1`}>
									<input
										type="checkbox"
										checked={todo.isCompleted}
										onChange={() => checkIsCompleted(todo.id)}
									/>
									<p>{todo.title}</p>
								</div>
								<button
									className="ml-3 font-bold bg-red-400 rounded px-2 py-1 cursor-pointer"
									onClick={() => handleDeleteTodo(todo.id)}
								>
									X
								</button>
							</div>
						))}
					</div>
				) : (
					<p className="mt-[50px] text-sm text-center italic text-gray-500 font-bold">
						Chưa có task nào. Hãy thêm task đầu tiên!
					</p>
				)}
			</div>
			{
				<p className="bg-white shadow-md border-[2px] border-gray-300 text-center mt-4 px-3 py-2 rounded">
					<span className="font-bold">Tổng:</span> {todos.length} task(s),{" "}
					<span className="font-bold">Hoàn thành: </span>
					{completedTodo()} task(s), <span className="font-bold">Còn lại: </span>
					{remainTodo()} task(s)
				</p>
			}
		</div>
	);
};
export default Todo;
