import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Alert, Keyboard } from 'react-native'
import { THEME } from '../theme'


export const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('')

	const pressHandler = () => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
			Keyboard.dismiss()
		} else {
			Alert.alert(
				'Alert Todo',
				'You need write name task...'
			)
		}

	}

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.inp}
				placeholder='enter todo...'
				onChangeText={text => setValue(text)}
				value={value}
				autoCorrect={false}
				autoFocus={true}
				clearButtonMode='always'
				autoCapitalize="none"
			/>
			<Button title='Add' onPress={pressHandler} />
		</View>
	)
}


const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginBottom: 15
	},
	inp: {
		width: '80%',
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: THEME.VIOLET_COLOR,
		padding: 10,
		borderRadius: 5,
		fontSize: 20,
		fontWeight: 'bold',
		marginRight: 10
	},
})