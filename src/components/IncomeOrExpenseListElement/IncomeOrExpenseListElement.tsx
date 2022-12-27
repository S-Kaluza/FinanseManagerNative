import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IIncomeOrExpenseListElementProps } from './IncomeOrExpenseListElement.types';
import { format } from 'date-fns';
import styles from './IncomeOrExpenseListElement.styles';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import Ionicon from 'react-native-vector-icons/Ionicons';

function IncomeOrExpenseListElement({ date, name, value, id } : IIncomeOrExpenseListElementProps) {
	const { removeExpense, removeIncome } = useContext(dataContext);
	return (
		<View style={styles.wrapper}>
			<Text style={styles.textDate}>{date? format(Date.parse(date.toString()), 'RRRR-MM-dd') : date}</Text>
			<Text style={styles.textDate}>{name}</Text>
			<Text style={styles.textDate}>{value}</Text>
			<Pressable style={styles.deleteButton} onPress={() => {
				removeExpense(id);
				removeIncome(id);
			}}><Ionicon name='trash' color={'black'} size={30}></Ionicon></Pressable>
		</View>
	);
}

export default IncomeOrExpenseListElement;