import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	dataWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30,
	},
	simpleText: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 20,
	},
	buttonsWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	button: {
		width: 45 + '%',
		height: 50,
		backgroundColor: 'gray',
		borderRadius: 15,
		marginTop: 20,
		marginBottom: 20,
		textAlign: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		marginTop: 'auto',
		marginBottom: 'auto',
	}
});