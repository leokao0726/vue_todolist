<template>	
	<div>
		<h2>Todo List:</h2>
		<div>
			<input type="text" placeholder="add Todo..." v-model="newTodo" @keyup.enter="actionAddTodo" />
			<button @click="actionAddTodo">add todo</button>
		</div>
		<ul>
			<li v-for="(todo, index) in todos">
				{{ todo.content }}
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data () {
			return {
				newTodo: ''
			}
		},
		computed: {
			...mapGetters({
  				// 使用取 list 的函式，將資料存在 todos
    			todos: 'getTodos'
  			})
		},
		methods: {
			...mapActions([
				//方法一：先引入
				'addTodo',
			]),
			actionAddTodo () {
				//方法一：使用
				// this.addTodo( this.newTodo );

				//這邊示範第二種方法，不需要先引入 action 可以直接呼叫（調用）。
				//使用 this.$store.dispatch( action(String), value );
				this.$store.dispatch('addTodo', this.newTodo);

				//清除data中input的value
				this.newTodo = '';
			},
		}
	}
</script>