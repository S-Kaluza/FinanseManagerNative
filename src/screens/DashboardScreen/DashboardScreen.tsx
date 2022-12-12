import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import IncomeOrExpanseListElement from '../../components/IncomeOrExpanseListElement/IncomeOrExpanseListElement';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import styles from './DashboardScreen.styles';

function DashboardScreen({ navigation }: any ) {
	const x = true;
	const { expanseList, incomeList, setIsExpense, isExpense } = useContext(dataContext);
	useEffect(() => console.log(incomeList), [incomeList, expanseList]);
	return <View>
		<ScrollView>
			{x? <View>
				<Ionicon name='lock-closed' color={'black'} size={150} style={styles.mainIcon}></Ionicon>
				<View style={styles.wrapper}><Ionicon name='log-in' color={'black'} size={40} style={styles.icons}></Ionicon><TouchableHighlight onPress={() => navigation.navigate('Login', { screen: LoginScreen })} style={styles.loginWrappers}><Text style={styles.nameLogin}>Zaloguj się</Text></TouchableHighlight></View>
				<View style={styles.wrapper}><Ionicon name='log-in-outline' color={'black'} size={40} style={styles.icons}></Ionicon><TouchableHighlight onPress={() => navigation.navigate('Register', { screen: RegisterScreen })} style={styles.loginWrappers}><Text style={styles.nameLogin}>Zarejestruj się</Text></TouchableHighlight></View>
				<View style={styles.wrapper}><Ionicon name='logo-google' color={'black'} size={40} style={styles.icons}></Ionicon><TouchableHighlight style={styles.loginWrappers}><Text style={styles.nameLogin}>Google</Text></TouchableHighlight></View>
				<View style={styles.wrapper}><Ionicon name='logo-twitter' color={'black'} size={40} style={styles.icons}></Ionicon><TouchableHighlight style={styles.loginWrappers}><Text style={styles.nameLogin}>Twitter</Text></TouchableHighlight></View>
				<View style={styles.wrapper}><Ionicon name='logo-facebook' color={'black'} size={40} style={styles.icons}></Ionicon><TouchableHighlight style={styles.loginWrappers}><Text style={styles.nameLogin}>FaceBook</Text></TouchableHighlight></View>
			</View> : 
				<View><>
					{isExpense?<>
						<Text>Expanse</Text>
						{expanseList.map(({ id, name, value, date }) => {
							return <IncomeOrExpanseListElement key={id} date={date} name={name} value={value}  />;
						})}</>:<>
						<Text>Income</Text>
						{incomeList.map(({ id, name, value, date }) => {
							return <IncomeOrExpanseListElement key={id} date={date} name={name} value={value}  />;
						})}</>}
				</>
				</View>}
			<Pressable onPress={() => setIsExpense(!isExpense)} style={styles.pressableSwitch}><Text>Switch Expanse Income</Text></Pressable>
		</ScrollView>
	</View>;
}

export default DashboardScreen;