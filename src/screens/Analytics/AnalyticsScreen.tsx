import React, { useContext, useState } from 'react';
import { Text, View, Dimensions, Pressable } from 'react-native';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import { LineChart } from 'react-native-chart-kit';
import styles from './AnalyticsScreen.styles';
import i18n from 'i18next';

export function AnalyticsScreen(){
	const [isWeekAnalytics, setIsWeekAnalytics] = useState(false);
	const { analyticsDataWeek, analyticsDataMonth, isExpense, setIsExpense } = useContext(dataContext);
	const labelsWeek = analyticsDataWeek.map(({ numberOfTimePeriod }) => {
		return numberOfTimePeriod.toString();
	});
	const labelsMonth = [i18n.t('januaryShort'), i18n.t('februaryShort'), i18n.t('marchShort'), i18n.t('aprilShort'), i18n.t('mayShort'), i18n.t('juneShort'), i18n.t('julyShort'), i18n.t('augustShort'), i18n.t('septemberShort'), i18n.t('octoberShort'), i18n.t('novemberShort'), i18n.t('decemberShort')];
	const incomeValuesWeek = analyticsDataWeek.map(({ valueIncome }) => {
		return valueIncome;
	});
	const expenseValuesWeek = analyticsDataWeek.map(({ valueExpense }) => {
		return valueExpense;
	});

	const incomeValuesMonth = analyticsDataMonth.map(({ valueIncome }) => {
		return valueIncome;
	});

	const expenseValuesMonth = analyticsDataMonth.map(({ valueExpense }) => {
		return valueExpense;
	});
	return (
		<View>
			<Text style={styles.analyticsHeader}>{!isExpense? i18n.t('incomeAnalytics') : i18n.t('expenseAnalytics')}</Text>
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
			<Pressable onPress={() => setIsExpense(!isExpense)} style={styles.pressableSwitch}><Text>{isExpense? i18n.t('switchIncome') : i18n.t('switchExpense')}</Text></Pressable>
			<Pressable onPress={() => setIsWeekAnalytics(!isWeekAnalytics)} style={styles.pressableSwitch}><Text>{isWeekAnalytics? i18n.t('switchMonth') : i18n.t('switchWeek')}</Text></Pressable>
		</View>
	);
}

export default AnalyticsScreen;