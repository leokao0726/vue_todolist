import Vue from 'vue'
import mutations from './mutations_type.js'
import * as types from './mutations_type.js'

export const addTodo = ({ commit }, newTodo) => {
	//直接將 newTodo 傳給 mutation
	commit(types.ADD_TODO, newTodo);
}

export const toggleTodo = ({ commit }, key) => {
	commit(types.TOGGLE_TODO, key);
}

export const deleteTodo = ({ commit }, key) => {
	commit(types.DELETE_TODO, key);
}

export const updateTodo = ({ commit }, obj) => {
	console.log('updateTodo', obj);
  	commit(types.UPDATE_TODO, obj);
}