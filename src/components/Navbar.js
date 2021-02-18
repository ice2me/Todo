import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Navbar = ({title}) => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>
				{title}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		backgroundColor: '#4545ac',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10
	},
	text: {
		fontSize: 26,
		color: 'white'
	}
})
