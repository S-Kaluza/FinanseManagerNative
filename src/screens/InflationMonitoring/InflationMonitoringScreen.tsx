import React, { useState } from 'react';
import { Text, View, Dimensions, Pressable } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { inflationArray } from './InflationMonitoringScreen.initialValues';
import styles from './InflationMonitoringScreen.styles';

export function InflationMonitorScreen(){
	const [year, setYear] = useState(2020);
	const inflationObjectsArray = inflationArray;
	const labels = inflationObjectsArray.filter(({ date }) => date.getFullYear() === year).map(({ date }) => {
		return (date.getMonth() + 1).toString();
	});
	const inflation = inflationObjectsArray.filter(({ date }) => date.getFullYear() === year).map(({ inflation }) => {
		return inflation;
	});

	return <View>
		<LineChart
			data={{
				labels: labels,
				datasets: [
					{
						data: inflation
					}
				]
			}}
			width={Dimensions.get('window').width} // from react-native
			height={220}
			yAxisLabel="% "
			xAxisLabel=''
			yAxisSuffix=""
			yAxisInterval={1} // optional, defaults to 1
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
		<View style={styles.controlWrapper}>
			<Pressable onPress={() => {if(year > 2020) {setYear(prev => prev - 1);}}}>
				<View style={styles.controlElement}>
					<Text style={styles.controlElementText}>
						{'<'}
					</Text>
				</View>
			</Pressable>
			<View style={styles.controlElement}>
				<Text style={styles.controlElementText}>
					{year}
				</Text>
			</View>
			<Pressable onPress={() => {if(year < 2022) {setYear(prev => prev + 1);}}}>
				<View style={styles.controlElement}>
					<Text style={styles.controlElementText}>
						{'>'}
					</Text>
				</View>
			</Pressable>
		</View>
	</View>;
}

export default InflationMonitorScreen;