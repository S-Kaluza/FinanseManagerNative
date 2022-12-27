import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	formWrapper: {
		maxHeight: 200,
		width: 300,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		flex: 1,
		justifyContent: 'space-between',
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