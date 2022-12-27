import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { BottomTabScreenPropsWithNavigation } from '../../navigations/RootNavigator.types';
import AddIncome from '../AddIncome/AddIncomeScreen';
import AddExpense from '../AddExpenseScreen/AddExpenseScreen';
import Analytics from '../Analytics/AnalyticsScreen';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverterScreen';
import InflationMonitor from '../InflationMonitoring/InflationMonitoringScreen';
import ExchangeRates from '../ExchangeRates/ExchangeRatesScreen';
import News from '../News/News';
import styles from './MenuScreen.styles';
import i18n from 'i18next';

function MenuScreen({ navigation }: BottomTabScreenPropsWithNavigation) {
	return <View style={styles.wrapper}>
		<Pressable onPress={() => navigation.navigate(i18n.t('AddIncome'), { screen: AddIncome })} style={styles.tile}><Ionicon name='add-circle' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('AddIncome')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('AddExpense'), { screen: AddExpense })} style={styles.tile}><Ionicon name='add-circle' color={'white'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('AddExpense')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('Analytics'), { screen: Analytics })} style={styles.tile}><Ionicon name='analytics' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('Analytics')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('CurrencyConverter'), { screen: CurrencyConverter })} style={styles.tile}><Ionicon name='calculator' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('CurrencyConverter')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('InflationMonitor'), { screen: InflationMonitor })} style={styles.tile}><Ionicon name='bar-chart' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('InflationMonitor')}</Text></Pressable>
	</View>;
}

export default MenuScreen;