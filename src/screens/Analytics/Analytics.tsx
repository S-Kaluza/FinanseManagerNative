import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, Dimensions, Pressable, StyleSheet } from 'react-native';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import { LineChart } from 'react-native-chart-kit';
import styles from './Analytics.styles';

export function Analytics(){
	const [isWeekAnalytics, setIsWeekAnalytics] = useState(false);
	const { analyticsDataWeek, analyticsDataMonth, isExpense, setIsExpense } = useContext(dataContext);
	const labelsWeek = analyticsDataWeek.map(({ numberOfTimePeriod }) => {
		return numberOfTimePeriod.toString();
	});
	const labelsMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const incomeValuesWeek = analyticsDataWeek.map(({ valueIncome }) => {
		return valueIncome;
	});
	const expenseValuesWeek = analyticsDataWeek.map(({ valueExpanse }) => {
		return valueExpanse;
	});

	const incomeValuesMonth = analyticsDataMonth.map(({ valueIncome }) => {
		return valueIncome;
	});

	const expenseValuesMonth = analyticsDataMonth.map(({ valueExpanse }) => {
		return valueExpanse;
	});
	const isWeek = false;
	console.log(labelsMonth.length);
	console.log(expenseValuesMonth.length);
	//TODO correct name of variable Expanse to Expense
	return (
		<View>
			<Text>{!isExpense? 'Income analytics' : 'Expanse Analytics'}</Text>
			<LineChart
				data={{
					labels: isWeekAnalytics? labelsWeek : labelsMonth, 
					datasets: [
						{
							data: !isExpense? isWeekAnalytics? incomeValuesWeek: incomeValuesMonth : isWeekAnalytics? expenseValuesWeek: expenseValuesMonth
						}
					]
				}}
				width={Dimensions.get('window').width} // from react-native
				height={220}
				yAxisLabel="PLN "
				xAxisLabel=''
				yAxisSuffix=""
				yAxisInterval={1} // optional, defaults to 1
				formatXLabel={(xValue) =>isWeekAnalytics? parseInt(xValue) % 7 == 0 || parseInt(xValue) == 1 ? 'w' + xValue : '' : xValue}
				chartConfig={{
					backgroundColor: '#e26a00',
					backgroundGradientFrom: '#fb8c00',
					backgroundGradientTo: '#ffa726',
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16
					},
					propsForDots: {
						r: '3',
						strokeWidth: '2',
						stroke: '#ffa726'
					}
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16
				}}
			/>
			<Pressable onPress={() => setIsExpense(!isExpense)} style={styles.pressableSwitch}><Text>Switch Expanse Income</Text></Pressable>
			<Pressable onPress={() => setIsWeekAnalytics(!isWeekAnalytics)} style={styles.pressableSwitch}><Text>Switch Week and Month</Text></Pressable>
		</View>
	);
}

export default Analytics;