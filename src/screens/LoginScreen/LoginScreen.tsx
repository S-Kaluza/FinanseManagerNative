import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { initialValues, LoginValidationSchema } from './LoginScreen.validation';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './LoginScreen.styles';

function LoginScreen() {
	const { loginUser, setLoginData, userToken, isLoadingUser } = useContext(authContext);
	const [show] = useState(false);
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues,
		validationSchema: LoginValidationSchema,
		onSubmit: () => {
			setLoginData({ email: values.email, password: values.password });
			loginUser();
			console.log('działa');
		},
	});
	return <View style={styles.formWrapper}>
		<Text>{userToken? userToken.data: 'not user token'}</Text>
		<Text>{isLoadingUser? 'Loading...' : 'not loading'}</Text>
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