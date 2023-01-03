import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import IncomeOrExpenseListElement from '../../components/IncomeOrExpenseListElement/IncomeOrExpenseListElement';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './DashboardScreen.styles';
import i18n from 'i18next';
import { BottomTabScreenPropsWithNavigation } from '../../navigation/RootNavigator.types';


function DashboardScreen( { navigation } : BottomTabScreenPropsWithNavigation ) {
	const { expenseList, incomeList, setIsExpense, isExpense, getIncomeAndExpenseFromAsyncStorage } = useContext(dataContext);
	useEffect(() => {
		if(expenseList.length === 0 && incomeList.length === 0) {
			getIncomeAndExpenseFromAsyncStorage();
		}
	}, [expenseList, incomeList]);
	
	return <View>
		<ScrollView>
			<View><>
				{isExpense?
					expenseList.length !== 0?<>
						<Text style={styles.headerText}>{i18n.t('expenses')}</Text>
						{expenseList.map(({ id, name, value, date }) => {
							return <IncomeOrExpenseListElement id={id} key={id} date={date} name={name} value={value}  />;
						})}</>:<><Pressable onPress={() => navigation.navigate(i18n.t('AddExpense'))} style={styles.AddIcons}><Ionicon name='add-circle' color={'gray'} size={75} style={styles.icons}></Ionicon><Text>{i18n.t('AddExpense')}</Text></Pressable></>
					:incomeList.length !== 0?<>
						<Text style={styles.headerText}>{i18n.t('incomes')}</Text>
						{incomeList.map(({ id, name, value, date }) => {
							return <IncomeOrExpenseListElement id={id} key={id} date={date} name={name} value={value}  />;
						})}</>: <><Pressable onPress={() => navigation.navigate(i18n.t('AddIncome'))} style={styles.AddIcons}><Ionicon name='add-circle' color={'black'} size={75} style={styles.icons}></Ionicon><Text>{i18n.t('AddIncome')}</Text></Pressable></>}
			</>
			</View>
			<Pressable onPress={() => setIsExpense(!isExpense)} style={styles.pressableSwitch}><Text>{isExpense? i18n.t('switchIncome') : i18n.t('switchExpense')}</Text></Pressable>
		</ScrollView>
	</View>;
}

export default DashboardScreen;