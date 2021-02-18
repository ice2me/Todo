import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { AddTodo } from './src/components/AddTodo'

import { Navbar } from './src/components/Navbar'
import { Todo } from './src/components/Todo'

export default function App() {
	const [todos, setTodos] = useState([])

	const addTodo = (title) => {
		setTodos(prev => [
			{
				id: Date.now().toString(),
				title
			},
			...prev])
	}

	return (
		<View >
			<Navbar title='Todo App' />
			<View style={styles.container}>
				<AddTodo onSubmit={addTodo} />
				<FlatList
					data={todos}
					renderItem={({ item }) => <Todo todo={item} />}
					keyExtractor={(i) => i.id.toString()}
				/>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: 30
	},
})
