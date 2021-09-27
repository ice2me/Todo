import React, {useState, useContext} from "react";
import {Navbar} from "./components/Navbar";
import {Alert, View, StyleSheet} from "react-native";
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";

export const MainLayout = () => {
	const todoContext = useContext(TodoContext)
	const [todoId, setTodoId] = useState(null)
	const [todos, setTodos] = useState([])
	
	const addTodo = (title) => {
		setTodos(prev => [
			{
				id: Date.now().toString(),
				title
			},
			...prev])
	}
	const removeTodo = id => {
		const todo = todos.find(t => t.id === id)
		
		Alert.alert(
			"Delete Element",
			`Are you sure delete ${todo.title} ?`,
			[
				{
					text: "Cancel",
					style: "cancel"
				},
				{
					text: "Delete", style: 'destructive', onPress: () => {
						setTodoId(null)
						setTodos(prev => prev.filter(todo => todo.id !== id))
					}
				}
			],
			{ cancelable: true }
		)
	}
	
	const updateTodo = (id, title) => {
		setTodos(old => old.map(todo => {
			if (todo.id === id) {
				todo.title = title
			}
			return todo
		}))
	}
	
	let content = (
		<MainScreen
			todos={todoContext.todos}
			addTodo={addTodo}
			removeTodo={removeTodo}
			openTodo={setTodoId}
		/>
	);
	
	if (todoId) {
		const selectedTodo = todos.find(todo => todo.id === todoId)
		content = <TodoScreen
			onRemove={removeTodo}
			goBack={() => setTodoId(null)}
			todo={selectedTodo}
			onSave={updateTodo}
		/>
	}
	
	return (
		<View >
			<Navbar title='Todo App' />
			<View style={styles.container}>
				{content}
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: THEME.PADDING_HORIZONTAL
	},
})
