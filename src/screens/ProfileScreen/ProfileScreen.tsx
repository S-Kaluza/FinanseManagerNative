import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { styles } from './ProfileScreen.styles';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { BottomTabScreenPropsWithNavigation } from '../../navigations/RootNavigator.types';
import Constants from 'expo-constants';

function ProfileScreen( { navigation }:  BottomTabScreenPropsWithNavigation) {
	const { loginStatus, profileData } = useContext(authContext);
	return <View>
		<ScrollView>
			<Image style={{ width: '100%', height: 250 }} source={{ uri: 'https://picsum.photos/200/300' }} />
			<View style={styles.buttonsWrapper}>
				<Pressable style={styles.button} onPress={() => navigation.navigate('updateProfile')}><Text style={styles.buttonText}>Edit</Text></Pressable>
				<Pressable style={styles.button}><Text style={styles.buttonText}>Synchronise</Text></Pressable>
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>username</Text>
				{profileData.username != null? <Text style={styles.simpleText}>{profileData.username}</Text> : <Text style={styles.simpleText}>brak danych</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>email</Text>
				{profileData.email != null? <Text style={styles.simpleText}>{profileData.email}</Text> : <Text style={styles.simpleText}>brak danych</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>data założenia</Text>	
				{profileData.created? <Text style={styles.simpleText}>{profileData.created.toISOString()}</Text> : <Text style={styles.simpleText}>brak danych</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>Ostatnia modyfikacja</Text>
				{profileData.lastUpdate? <Text style={styles.simpleText}>{profileData.lastUpdate.toISOString()}</Text> : <Text style={styles.simpleText}>brak danych</Text>}
			</View>
			<View style={styles.dataWrapper}>
				<Text style={styles.simpleText}>Opis</Text>
				{profileData.description != null? <Text style={styles.simpleText}>{profileData.description}</Text>: <Text style={styles.simpleText}>brak danych</Text>}
			</View>
			{loginStatus != 'Success'? <View style={styles.buttonsWrapper}>
				<Pressable style={styles.button}><Text style={styles.buttonText}>Login</Text></Pressable>
				<Pressable style={styles.button}><Text style={styles.buttonText}>Register</Text></Pressable>
			</View> :
				<Pressable style={styles.button}><Text>Logout</Text></Pressable>}
		</ScrollView>
	</View>;
}

export default ProfileScreen;