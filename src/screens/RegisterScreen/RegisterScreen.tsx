import { View, Text, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { BottomTabScreenPropsWithNavigation } from '../../navigations/RootNavigator.types';
import { useEffect } from 'react';
import { RegisterValidationSchema } from './RegisterScreen.validation';
import styles from './RegisterScreen.styles';

function RegisterScreen({ navigation } : BottomTabScreenPropsWithNavigation) {
	const { setRegisterData, isLoadingUser, isLogin, registerData, registerUserFunc } = useContext(authContext);
	const [show] = useState(false);
	useEffect(() => {
		navigation.goBack();
	}, [isLogin]);
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: registerData,
		validationSchema: RegisterValidationSchema,
		onSubmit: () => {
			setRegisterData({ email: values.email, password: values.password, username: values.username });
			registerUserFunc();
			console.warn(values);
		},
	});

	return <View style={styles.formWrapper}>
		<Text>{isLoadingUser? 'Loading...' : 'not loading'}</Text>
		<FloatingLabelInput
			nativeID='username'
			label={'username'}
			value={values.username}
			onChangeText={handleChange('username')}
		/>
		<View style={{ height: 10 + '%' }} />
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

export default RegisterScreen;