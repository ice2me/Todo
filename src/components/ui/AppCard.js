import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AppCard = props => (
	<View style={ {...styles.card, ...props.style} }>
		{props.children}
	</View>
)

const styles = StyleSheet.create({
	card: {
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		shadowColor: '#999',
		shadowRadius: 2,
		shadowOpacity: 0.5,
		shadowOffset: { width: 2, height: 2 },
		elevation: 8,
		backgroundColor: '#fff',
	}
})