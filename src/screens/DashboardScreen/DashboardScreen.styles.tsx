import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	icons: {
		marginTop: 20,
	},
	mainIcon: {
		marginTop: 20,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	loginWrappers: {
		minHeight: 40,
		minWidth: 250,
		backgroundColor: 'darkgray',
		borderRadius: 75,
		textAlign: 'center',
		marginTop: 20,
		marginRight: 'auto',
		marginLeft: 20,
	},
	nameLogin: {
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: 20,
	},
	wrapper: {
		flexDirection: 'row',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	pressableSwitch: {
		height: 30,
		width: 45 + '%',
		marginTop: 20,
		marginRight: 'auto',
		marginLeft: 'auto',
		backgroundColor: 'gray',
		borderWidth: 2,
		borderRadius: 16,
	},
	headerText: {
		marginTop: 20,
		marginBottom: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: 20,
	}
});

export default styles;