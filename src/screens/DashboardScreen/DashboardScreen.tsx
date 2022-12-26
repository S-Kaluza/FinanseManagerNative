import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, NativeModules } from 'react-native';
import IncomeOrExpenseListElement from '../../components/IncomeOrExpenseListElement/IncomeOrExpenseListElement';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import styles from './DashboardScreen.styles';
import i18n from 'i18next';


function DashboardScreen( ) {
	const { expenseList, incomeList, setIsExpense, isExpense, getIncomeAndExpenseFromAsyncStorage } = useContext(dataContext);
	useEffect(() => {
		if(expenseList.length === 0 && incomeList.length === 0) {
			getIncomeAndExpenseFromAsyncStorage();
		}
	}, []);
	return <View>
		<ScrollView>
			<View><>
				{isExpense?<>
					<Text style={styles.headerText}>{i18n.t('expenses')}</Text>
					{expenseList.map(({ id, name, value, date }) => {
						return <IncomeOrExpenseListElement id={id} key={id} date={date} name={name} value={value}  />;
					})}</>:<>
					<Text style={styles.headerText}>{i18n.t('incomes')}</Text>
					{incomeList.map(({ id, name, value, date }) => {
						return <IncomeOrExpenseListElement id={id} key={id} date={date} name={name} value={value}  />;
					})}</>}
			</>
			</View>
			<Pressable onPress={() => setIsExpense(!isExpense)} style={styles.pressableSwitch}><Text>{isExpense? i18n.t('switchIncome') : i18n.t('switchExpense')}</Text></Pressable>
		</ScrollView>
	</View>;
}

export default DashboardScreen;