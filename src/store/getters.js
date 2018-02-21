export const getTodos = state => {
	return state.todos;
}



//getters 無法傳值？
export const getDone = state => {
	return state.todos.filter((item) => {
		return item.done;
	});
}

export const getTodo = state => {
	return state.todos.filter((item) => {
		return !item.done;
	});
}