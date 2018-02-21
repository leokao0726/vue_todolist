import * as types from './mutations_type.js'
import Vue from 'vue'

// state
export const state = {
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-router 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false }
  ]
};

let todoKey = state.todos.length;

export const mutations = {
  [types.ADD_TODO] (state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false
    });

    todoKey++;
  },
};


