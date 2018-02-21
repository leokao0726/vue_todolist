<template>	
	<div class="container">
		<h1>vue and vuex Todo List example</h1>
		<hr>
		<div class="row">
			<div class="input-group col-md-4">
				<input type="text" class="form-control" placeholder="add Todo..." v-model="newTodo" @keyup.enter="actionAddTodo" />
				<span class="input-group-btn">
          			<button class="btn btn-success" type="button" @click="actionAddTodo">
            			<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          			</button>
        		</span>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6">
				<h2>Todo List:</h2>
				<ol>	
					<todoItem v-for="(item, index) in todoList" :item="item" />				
					<!-- <li v-for="(item, index) in todoList">
						<label>
							<input type="checkbox" :checked="item.done" @change="toggleTodo(item.key)">
							{{ item.content }}
						</label>
						<button class="btn btn-xs btn-danger" @click="deleteTodo(item.key)">
            				<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          				</button>
					</li> -->
				</ol>
			</div>

			<div class="col-md-6">
				<h2>Done List:</h2>
        		<ol>
	          		<li v-for="(item, index) in doneList">
	            		<label>
	              			<input type="checkbox" :checked="item.done" @change="toggleTodo(item.key)">
	              			{{ item.content }}
	              		</label>
	          		</li>
        		</ol>
			</div>
		</div>
		<!-- <ul>
			<li v-for="(todo, index) in todos">
				{{ todo.content }}
			</li>
		</ul> -->
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import todoItem from '../components/todoItem.vue';

	export default {
		components: {
    		todoItem
  		},

		data () {
			return {
				newTodo: ''
			}
		},
		computed: {
			...mapGetters({
  				// 使用取 list 的函式，將資料存在 todos
    			// todos: 'getTodos',
    			todoList: 'getTodo',
    			doneList: 'getDone'
  			})
		},
		methods: {
			...mapActions([
				//方法一：先引入
				'addTodo',
				'toggleTodo'
			]),
			actionAddTodo () {
				//方法一：使用
				this.addTodo(this.newTodo);

				//方法二，不需要先引入 action 可以直接呼叫（調用）。
				//使用 this.$store.dispatch( action(String), value );
				// this.$store.dispatch('addTodo', this.newTodo);

				//清除data中input的value
				this.newTodo = '';
			},
		}
	}
</script>