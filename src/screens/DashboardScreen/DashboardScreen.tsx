import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import IncomeOrExpenseListElement from '../../components/IncomeOrExpenseListElement/IncomeOrExpenseListElement';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import styles from './DashboardScreen.styles';
import { BottomTabScreenPropsWithNavigation } from './../../navigations/RootNavigator.types';


function DashboardScreen({ navigation }: BottomTabScreenPropsWithNavigation ) {
	const x = true;
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