import { View, Text, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { LoginValidationSchema } from './LoginScreen.validation';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { BottomTabScreenPropsWithNavigation } from '../../navigations/RootNavigator.types';
import styles from './LoginScreen.styles';
import i18n from 'i18next';
import { useEffect } from 'react';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

function LoginScreen({ navigation } : BottomTabScreenPropsWithNavigation) {
	const { setLoginData, isLoadingUser, isLogin, loginUserFunc, loginData } = useContext(authContext);
	const [show] = useState(false);
	useEffect(() => {
		navigation.navigate(i18n.t('Profile'));
	}, [isLogin]);
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: loginData,
		validationSchema: LoginValidationSchema,
		onSubmit: () => {
			setLoginData({ email: values.email, password: values.password });
			loginUserFunc();
		},
	});
	
	return <View style={styles.formWrapper}>
		<Text>{isLoadingUser? i18n.t('loading') : ''}</Text>
		<FloatingLabelInput
			nativeID='email'
			label={'e-mail'}
			value={values.email}
			onChangeText={handleChange('email')}
		/>
		<View style={{ height: 10 + '%' }} />
		<FloatingLabelInput
			label={'password'}
			value={values.password}
			isPassword
			togglePassword={show}
			customShowPasswordComponent={<Text>Show</Text>}
			customHidePasswordComponent={<Text>Hide</Text>}
			onChangeText={handleChange('password')}
		/>
		<View style={{ height: 10 + '%' }} />
		<Pressable onPress={() => handleSubmit()} style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>Zaloguj się</Text></Pressable>
	</View>;
}

export default LoginScreen;