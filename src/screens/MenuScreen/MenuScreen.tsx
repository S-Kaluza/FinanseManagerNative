import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { BottomTabScreenPropsWithNavigation } from '../../navigations/RootNavigator.types';
import styles from './MenuScreen.styles';
import i18n from 'i18next';

function MenuScreen({ navigation }: BottomTabScreenPropsWithNavigation) {
	
	return <View style={styles.wrapper}>
		<Pressable onPress={() => navigation.navigate(i18n.t('AddIncome'))} style={styles.tile}><Ionicon name='add-circle' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('AddIncome')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('AddExpense'))} style={styles.tile}><Ionicon name='add-circle' color={'white'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('AddExpense')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('Analytics'))} style={styles.tile}><Ionicon name='analytics' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('Analytics')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('CurrencyConverter'))} style={styles.tile}><Ionicon name='calculator' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('CurrencyConverter')}</Text></Pressable>
		<Pressable onPress={() => navigation.navigate(i18n.t('InflationMonitor'))} style={styles.tile}><Ionicon name='bar-chart' color={'black'} size={75} style={styles.icons}></Ionicon><Text style={styles.texts}>{i18n.t('InflationMonitor')}</Text></Pressable>
	</View>;
}

export default MenuScreen;