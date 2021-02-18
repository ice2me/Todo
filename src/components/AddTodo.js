import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native'


export const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('')

	const pressHandler = () => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
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
		justifyContent: 'space-between',
		marginBottom: 15
	},
	inp: {
		width: '70%',
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#3949ab',
		padding: 10
	},
	but: {

	}
})