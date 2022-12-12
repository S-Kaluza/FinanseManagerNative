import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IIncomeOrExpanseListElementProps } from './IncomeOrExpanseListElement.types';
import { format } from 'date-fns';
import styles from './IncomeOrExpanseListElement.styles';

function IncomeOrExpanseListElement({ date, name, value } : IIncomeOrExpanseListElementProps) {
	console.warn(value.toString());
	return (
		<View style={styles.wrapper}>
			<Text style={styles.textDate}>{format(date, 'RRRR-MM-dd')}</Text>
			<Text style={styles.textDate}>{name}</Text>
			<Text style={styles.textDate}>{value}</Text>
		</View>
	);
}

export default IncomeOrExpanseListElement;