import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	wrapper: {
		minHeight: 40,
		minWidth: 100 + '%',
		marginTop: 10,
		backgroundColor: 'lightgray',
		flexDirection: 'row',
	},
	textDate: {
		marginRight: 20,
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	deleteButton: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 20,
		backgroundColor: 'gray',

	}
});

export default styles;