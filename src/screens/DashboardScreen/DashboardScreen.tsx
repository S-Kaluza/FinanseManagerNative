import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import IncomeOrExpenseListElement from '../../components/IncomeOrExpenseListElement/IncomeOrExpenseListElement';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import styles from './DashboardScreen.styles';


function DashboardScreen( ) {
	const { expenseList, incomeList, setIsExpense, isExpense } = useContext(dataContext);
	useEffect(() => console.log(incomeList), [incomeList, expenseList]);
	return <View>
		<ScrollView>
			<View><>
				{isExpense?<>
					<Text>Expense</Text>
					{expenseList.map(({ id, name, value, date }) => {
						return <IncomeOrExpenseListElement key={id} date={date} name={name} value={value}  />;
					})}</>:<>
					<Text>Income</Text>
					{incomeList.map(({ id, name, value, date }) => {
						return <IncomeOrExpenseListElement key={id} date={date} name={name} value={value}  />;
					})}</>}
			</>
			</View>
			<Pressable onPress={() => setIsExpense(!isExpense)} style={styles.pressableSwitch}><Text>Switch Expense Income</Text></Pressable>
		</ScrollView>
	</View>;
}

export default DashboardScreen;