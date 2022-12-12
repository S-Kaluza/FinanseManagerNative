import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	tile: {
		minHeight: 125,
		maxHeight: 200,
		width: 30 + '%',
		marginLeft: 10,
		marginTop: 10,
		backgroundColor: 'gray',
		textAlign: 'center',
		justifyContent: 'center',
	},
	wrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: 100 + '%',
	},
	icons: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	texts: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 15,
	}
});

export default styles;