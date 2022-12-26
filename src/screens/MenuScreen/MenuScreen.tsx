import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { BottomTabScreenPropsWithNavigation } from '../../navigations/RootNavigator.types';
import AddIncome from '../AddIncome/AddIncome';
import AddExpense from '../AddExpense/AddExpense';
import Analytics from '../Analytics/Analytics';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import InflationMonitor from '../InflationMonitoring/InflationMonitoring';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import News from '../News/News';
import styles from './MenuScreen.styles';
import i18n from 'i18next';

function MenuScreen({ navigation }: BottomTabScreenPropsWithNavigation) {
	return <View style={styles.wrapper}>
		<Pressable onPress={() => navigation.navigate(i18n.t('AddIncome'), { screen: AddIncome })} style={styles.tile}><Ionicon name='add-circle' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Dodaj przychody</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('AddExpense'), { screen: AddExpense })} style={styles.tile}><Ionicon name='add-circle' color={'white'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Dodaj Wydatki</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('Analytics'), { screen: Analytics })} style={styles.tile}><Ionicon name='analytics' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Statystyka</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('CurrencyConverter'), { screen: CurrencyConverter })} style={styles.tile}><Ionicon name='calculator' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Konwerter walut</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('InflationMonitor'), { screen: InflationMonitor })} style={styles.tile}><Ionicon name='bar-chart' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Monitoring inflacji</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('ExchangeRates'), { screen: ExchangeRates })} style={styles.tile}><Ionicon name='cash' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>Kursy walut</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('News'), { screen: News })} style={styles.tile}><Ionicon name='newspaper' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>news</Text></Pressable>
	</View>;
}

export default MenuScreen;