import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	dataAndLabelWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
	},
	simpleText: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 20,
	},
	inputField: {
		width: 60 + '%',
		height: 50,
		backgroundColor: 'lightgray',
		borderRadius: 7,
		textAlign: 'center',
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
	buttonWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		marginTop: 'auto',
		marginBottom: 'auto',
	}
});