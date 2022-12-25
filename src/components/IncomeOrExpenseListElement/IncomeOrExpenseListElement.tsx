import React from 'react';
import { Text, View } from 'react-native';
import { IIncomeOrExpenseListElementProps } from './IncomeOrExpenseListElement.types';
import { format } from 'date-fns';
import styles from './IncomeOrExpenseListElement.styles';

function IncomeOrExpenseListElement({ date, name, value } : IIncomeOrExpenseListElementProps) {
	console.warn(value.toString());
	return (
		<View style={styles.wrapper}>
			<Text style={styles.textDate}>{format(date, 'RRRR-MM-dd')}</Text>
			<Text style={styles.textDate}>{name}</Text>
			<Text style={styles.textDate}>{value}</Text>
		</View>
	);
}

export default IncomeOrExpenseListElement;