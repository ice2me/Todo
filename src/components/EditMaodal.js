import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
	const [title, setTitle] = useState(value)

	const saveHandler = () => {
		if (title.trim().length < 3) {
			Alert.alert(
				"Error!",
				`Min length 3. Now ${title.length} simbols.`
			)
		} else {
			onSave(title)
		}
	}

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View style={styles.wrap}>
				<TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder='Enter name' autoCorrect={false} autoCapitalize='none' maxLength={65} />
				<View style={styles.buttons}>
					<Button title='Undo' onPress={onCancel} color={THEME.RED_COLOR} />
					<Button title='Save' onPress={saveHandler} />
				</View>
			</View>
		</Modal >
	)
}





const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		padding: 10,
		borderColor: THEME.VIOLET_COLOR,
		borderWidth: 2,
		width: '80%',
		fontSize: 22
	},
	buttons: {
		width: '100%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})