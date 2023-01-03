import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { styles } from './ProfileScreen.styles';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { BottomTabScreenPropsWithNavigation } from '../../navigation/RootNavigator.types';
import i18n from 'i18next';
import { dataContext } from '../../providers/DataProvider/DataProvider';

function ProfileScreen( { navigation }:  BottomTabScreenPropsWithNavigation) {
	const { profileData, removeTokenFromLocalStorage, isLogin } = useContext(authContext);
	const { synchroniseData } = useContext(dataContext);
	
	return <View>
		<ScrollView>
			<Image style={{ width: '100%', height: 250 }} source={{ uri: 'https://picsum.photos/200/300' }} />
			<View style={styles.buttonsWrapper}>
				<Pressable style={styles.button} onPress={() => navigation.navigate(i18n.t('UpdateProfile'))}><Text style={styles.buttonText}>{i18n.t('edit')}</Text></Pressable>
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>{i18n.t('username')}</Text>
				{profileData.username != null? <Text style={styles.simpleText}>{profileData.username}</Text> : <Text style={styles.simpleText}>{i18n.t('noData')}</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>{i18n.t('email')}</Text>
				{profileData.email != null? <Text style={styles.simpleText}>{profileData.email}</Text> : <Text style={styles.simpleText}>{i18n.t('noData')}</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>{i18n.t('createdDate')}</Text>	
				{profileData.created? <Text style={styles.simpleText}>{profileData.created.toISOString()}</Text> : <Text style={styles.simpleText}>{i18n.t('noData')}</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>{i18n.t('lastModifiedDate')}</Text>
				{profileData.lastUpdate? <Text style={styles.simpleText}>{profileData.lastUpdate.toISOString()}</Text> : <Text style={styles.simpleText}>{i18n.t('noData')}</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>{i18n.t('description')}</Text>
				{profileData.description != null? <Text style={styles.simpleText}>{profileData.description}</Text>: <Text style={styles.simpleText}>{i18n.t('noData')}</Text>}
			</View>
			{!isLogin? <View style={styles.buttonsWrapper}>
				<Pressable style={styles.button} onPress={() => navigation.navigate(i18n.t('Login'))}><Text style={styles.buttonText}>{i18n.t('Login')}</Text></Pressable>
				<Pressable style={styles.button} onPress={() => navigation.navigate(i18n.t('Register'))}><Text style={styles.buttonText}>{i18n.t('Register')}</Text></Pressable>
			</View> :
				<Pressable style={styles.button} onPress={removeTokenFromLocalStorage}><Text style={styles.buttonText}>{i18n.t('logout')}</Text></Pressable>}
		</ScrollView>
	</View>;
}

export default ProfileScreen;