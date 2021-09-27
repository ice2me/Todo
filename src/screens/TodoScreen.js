import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { EditModal } from '../components/EditMaodal'
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
	const [modal, setModal] = useState(false)
	const saveHandler = (title) => {
		onSave(todo.id, title)
		setModal(false)
	}
	return (
		<View>
			<EditModal value={todo.title} onSave={saveHandler} visible={modal} onCancel={() => setModal(false)} />
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<Button title='Edit' onPress={() => setModal(true)} />
			</AppCard>
			<View style={styles.buttons}>
				<View style={styles.button}><Button title="Exit" onPress={goBack} color={THEME.GREY_COLOR} /></View>
				<View style={styles.button}><Button title="Delete" color={THEME.RED_COLOR} onPress={() => onRemove(todo.id)} /></View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	card: {
		marginBottom: 20,
	},
	button: {
		width: '40%'
	},
	title: {
		fontSize: 22
	}
})