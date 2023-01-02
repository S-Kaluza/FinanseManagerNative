import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import { useFormik } from 'formik';
import { styles } from './ProfileDataUpdateScreen.styles';
import { ProfileUpdateValidationSchema } from './ProfileDataUpdateScreen.validation';
import { View, Text, Pressable } from 'react-native';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { toDate } from 'date-fns';
import { BottomTabScreenPropsWithNavigation } from '../../navigations/RootNavigator.types';
import i18n from 'i18next';

function ProfileDataUpdateScreen({ navigation }: BottomTabScreenPropsWithNavigation) {
	const { profileData, setProfileData, addProfileDataToAsyncStorage } = useContext(authContext);
	const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
		initialValues: profileData,
		validationSchema: ProfileUpdateValidationSchema,
		onSubmit: () => {
			setProfileData(values);
			addProfileDataToAsyncStorage();
			navigation.goBack();
		},
	});

	const dataPickerShowMode = (currentMode: any) => {
		DateTimePickerAndroid.open({
			nativeID: 'birthDate',
			value: values.birthDate,
			onChange: (val) => {if(val.nativeEvent.timestamp) setFieldValue('birthDate', toDate(val.nativeEvent.timestamp));},
			mode: currentMode,
			is24Hour: true,
		});
	};

	return <View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>{i18n.t('username')}</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('username')} value={values.username} />
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>{i18n.t('email')}</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('email')} value={values.email} />
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>{i18n.t('bithDate')}</Text>
			<Pressable onPress={() => dataPickerShowMode('date')} style={styles.inputField}><Text style={styles.buttonText}>{values.birthDate.toDateString()}</Text></Pressable>
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>{i18n.t('image')}</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('profileImage')} value={values.profileImage} />
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>{i18n.t('description')}</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('description')} value={values.description} multiline numberOfLines={10} />
		</View>
		<View style={styles.buttonWrapper}>
			<Pressable style={styles.button} onPress={() => handleSubmit()}><Text style={styles.buttonText}>{i18n.t('save')}</Text></Pressable>
		</View>
	</View>;
}

export default ProfileDataUpdateScreen;