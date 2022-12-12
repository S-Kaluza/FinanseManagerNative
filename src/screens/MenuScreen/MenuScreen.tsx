import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AddIncome from '../AddIncome/AddIncome';
import AddExpanse from '../AddExpanse/AddExpanse';
import Analytics from '../Analytics/Analytics';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import InflationMonitor from '../InflationMonitoring/InflationMonitoring';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import News from '../News/News';
import styles from './MenuScreen.styles';

function MenuScreen({ navigation }: any) {
	return <View style={styles.wrapper}>
		<Pressable onPress={() => navigation.navigate('AddIncome', { screen: AddIncome })} style={styles.tile}><Ionicon name='add-circle' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Dodaj przychody</Text></Pressable>
		<Pressable onPress={() => navigation.navigate('AddExpanse', { screen: AddExpanse })} style={styles.tile}><Ionicon name='add-circle' color={'white'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Dodaj Wydatki</Text></Pressable>
		<Pressable onPress={() => navigation.navigate('Analytics', { screen: Analytics })} style={styles.tile}><Ionicon name='analytics' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Statystyka</Text></Pressable>
		<Pressable onPress={() => navigation.navigate('CurrencyConverter', { screen: CurrencyConverter })} style={styles.tile}><Ionicon name='calculator' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Konwerter walut</Text></Pressable>
		<Pressable onPress={() => navigation.navigate('InflationMonitor', { screen: InflationMonitor })} style={styles.tile}><Ionicon name='bar-chart' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Monitoring inflacji</Text></Pressable>
		<Pressable onPress={() => navigation.navigate('ExchangeRates', { screen: ExchangeRates })} style={styles.tile}><Ionicon name='cash' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Kursy walut</Text></Pressable>
		<Pressable onPress={() => navigation.navigate('News', { screen: News })} style={styles.tile}><Ionicon name='newspaper' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>news</Text></Pressable>
	</View>;
}

export default MenuScreen;