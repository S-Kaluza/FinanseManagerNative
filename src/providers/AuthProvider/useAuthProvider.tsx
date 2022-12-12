import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import authFetch from '../../api/authApi';
import { ILoginData, IRegisterData } from './authContext.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAuthProvider() {
	const [loginData, setLoginData] = useState<ILoginData>({} as ILoginData);
	const [registerData, setRegisterData] = useState<IRegisterData>({} as IRegisterData);
	//const [, setCookie] = useCookies(['token']);
	const { data: userToken, refetch: loginUser, isLoading: isLoadingUser, error: errorLogin, status: loginStatus } = useQuery(['loginUser', loginData], () => authFetch.LoginUser(loginData), { enabled: false });
	const { data: userTokenRegister, refetch: registerUser, isLoading: isRegisteringUser, error: errorRegister, status: registerStatus } = useQuery(['registerUser', loginData], () => authFetch.RegisterUser(registerData), { enabled: false });
	useEffect(() => {
		if (loginStatus === 'success') {
			AsyncStorage.setItem('token', userToken?.data.token).catch(e => {
				console.log(e);
			});
			console.log('loginStatus = true');
		}
	}, [loginStatus]);
	useEffect(() => {
		if (registerStatus === 'success') {
			AsyncStorage.setItem('token', userToken?.data.token).catch(e => {
				console.log(e);
			});
		}
	}, [registerStatus]);

	return {
		userToken,
		userTokenRegister,
		setLoginData,
		setRegisterData,
		loginData,
		registerData,
		loginUser,
		registerUser,
		isLoadingUser,
		isRegisteringUser,
		errorLogin,
		errorRegister,
	};
}

export default useAuthProvider;
