import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	formWrapper: {
		maxHeight: 200,
		width: 300,
		marginLeft: 'auto',
		marginRight: 'auto',
		flex: 1,
		justifyContent: 'space-between',
	},
	resultText: {
		marginTop: 30,
		marginBottom: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: 30,
	},
	resultView: {
		minHeight: 150,
		minWidth: 150,
		marginRight: 'auto',
		marginLeft: 'auto',
		marginBottom: 50 + '%',
		borderColor: 'black',
		borderWidth: 5,
		justifyContent: 'center',
		borderRadius: 20,
	},
	inputStyle: {
		marginTop: 30,
		width: 80 + '%',
		maxHeight: 30,
		backgroundColor: 'blue',
	},
	buttonStyle: {
		height: 50,
		width: 80 + '%',
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: 'gray',
		borderRadius: 75,
	},
	buttonTextStyle: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
	}
});

export default styles;