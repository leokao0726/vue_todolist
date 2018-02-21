import Vue from 'vue'
import mutations from './mutations_type.js'
import * as types from './mutations_type.js'

export const addTodo = ({ commit }, newTodo) => {
	//直接將 newTodo 傳給 mutation
	commit(types.ADD_TODO, newTodo);
}